#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour extraire manuellement les données de leçons depuis l'APK
Version alternative avec interface manuelle pour la correction des données
"""

import json
import re
import sys
from typing import Dict, List, Any
import os

class ManualLessonsExtractor:
    """Extracteur manuel de leçons avec correction interactive"""

    def __init__(self):
        self.raw_data = ""
        self.lessons_data = []
        self.output_file = "src/data/lessonsData.ts"

    def load_javascript_file(self, js_file_path: str) -> bool:
        """Charger le fichier JavaScript depuis l'APK"""
        try:
            print(f"Chargement du fichier: {js_file_path}")
            with open(js_file_path, 'r', encoding='utf-8') as f:
                self.raw_data = f.read()
            print(f"✓ Fichier chargé ({len(self.raw_data)} caractères)")
            return True
        except FileNotFoundError:
            print(f"✗ Fichier non trouvé: {js_file_path}")
            return False
        except Exception as e:
            print(f"✗ Erreur lors du chargement: {e}")
            return False

    def extract_lessons_array(self) -> str:
        """Extraire le tableau de leçons du JavaScript"""
        # Pattern pour trouver le tableau A = [...]
        pattern = r'A\s*=\s*\[(.*?)\];'
        match = re.search(pattern, self.raw_data, re.DOTALL)

        if not match:
            print("✗ Impossible de trouver le tableau de leçons")
            return ""

        lessons_js = match.group(1)
        print(f"✓ Tableau de leçons extrait ({len(lessons_js)} caractères)")
        return lessons_js

    def fix_javascript_syntax(self, js_content: str) -> str:
        """Corriger la syntaxe JavaScript pour la convertir en JSON valide"""
        print("Correction de la syntaxe JavaScript...")

        # 1. Ajouter des guillemets aux clés
        fixed = re.sub(r'([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', js_content)

        # 2. Corriger les structures d'objets imbriqués
        fixed = fixed.replace('"title": {pt:', '"title": {"pt":')
        fixed = fixed.replace('"cv":', '"cv":')
        fixed = fixed.replace('}, "description":', '}, "description":')
        fixed = fixed.replace('}, "content":', '}, "content":')
        fixed = fixed.replace('}, "examples":', '}, "examples":')
        fixed = fixed.replace('}], "exercises":', '}], "exercises":')
        fixed = fixed.replace('}], "practicalTips":', '}], "practicalTips":')

        # 3. Fermer les objets et tableaux
        open_braces = fixed.count('{') - fixed.count('}')
        open_brackets = fixed.count('[') - fixed.count(']')

        if open_braces > 0:
            fixed += '}' * open_braces
        if open_brackets > 0:
            fixed += ']' * open_brackets

        # Correction pour les accolades dans le print
        open_count = fixed.count('{')
        close_count = fixed.count('}')
        print(f"✓ Syntaxe corrigée ({{: {open_count}, }}: {close_count})")
        return fixed

    def validate_and_parse_json(self, json_content: str) -> List[Dict]:
        """Valider et parser le contenu JSON"""
        try:
            # Tentative de parsing direct
            data = json.loads(json_content)
            if isinstance(data, list):
                print(f"✓ JSON valide: {len(data)} leçons trouvées")
                return data
            else:
                print("✗ Le contenu n'est pas un tableau")
                return []
        except json.JSONDecodeError as e:
            print(f"✗ Erreur de parsing JSON: {e}")
            print("Tentative de correction manuelle...")

            # Sauvegarder le contenu problématique pour analyse
            with open('debug_lessons.json', 'w', encoding='utf-8') as f:
                f.write(json_content)

            return self.manual_correction(json_content)

    def manual_correction(self, problematic_json: str) -> List[Dict]:
        """Correction manuelle interactive du JSON"""
        print("\n" + "="*50)
        print("CORRECTION MANUELLE REQUISE")
        print("="*50)
        print("Le fichier 'debug_lessons.json' a été créé pour analyse.")
        print("Veuillez corriger manuellement le fichier JSON.")
        print("Puis appuyez sur Entrée pour continuer...")
        input()

        try:
            with open('debug_lessons.json', 'r', encoding='utf-8') as f:
                corrected_content = f.read()

            data = json.loads(corrected_content)
            print(f"✓ Correction réussie: {len(data)} leçons")
            return data

        except json.JSONDecodeError as e:
            print(f"✗ Échec de la correction: {e}")
            return []

    def generate_typescript_interface(self) -> str:
        """Générer l'interface TypeScript"""
        return '''export interface Lesson {
  id: number;
  category: string;
  level: string;
  title: {
    pt: string;
    cv: string;
  };
  description: {
    pt: string;
    cv: string;
  };
  content: {
    pt: string;
    cv: string;
  };
  examples: Array<{
    pt: string;
    cv: string;
  }>;
  exercises?: Array<{
    type: string;
    question: {
      pt: string;
      cv: string;
    };
    answer: {
      pt: string;
      cv: string;
    };
  }>;
  practicalTips?: {
    pt: string;
    cv: string;
  };
}

'''

    def generate_typescript_data(self, lessons_data: List[Dict]) -> str:
        """Générer les données TypeScript"""
        json_data = json.dumps(lessons_data, ensure_ascii=False, indent=2)
        return f"export const lessonsData: Lesson[] = {json_data};"

    def save_typescript_file(self, lessons_data: List[Dict]) -> bool:
        """Sauvegarder le fichier TypeScript"""
        try:
            # Créer le répertoire si nécessaire
            os.makedirs(os.path.dirname(self.output_file), exist_ok=True)

            # Générer le contenu complet
            ts_content = self.generate_typescript_interface()
            ts_content += self.generate_typescript_data(lessons_data)

            # Sauvegarder
            with open(self.output_file, 'w', encoding='utf-8') as f:
                f.write(ts_content)

            print(f"✓ Fichier TypeScript sauvegardé: {self.output_file}")
            return True

        except Exception as e:
            print(f"✗ Erreur lors de la sauvegarde: {e}")
            return False

    def process_file(self, js_file_path: str) -> bool:
        """Traiter complètement un fichier"""
        print("EXTRACTION MANUELLE DE LEÇONS")
        print("=" * 50)

        # Étape 1: Charger le fichier
        if not self.load_javascript_file(js_file_path):
            return False

        # Étape 2: Extraire le tableau
        lessons_js = self.extract_lessons_array()
        if not lessons_js:
            return False

        # Étape 3: Corriger la syntaxe
        fixed_js = self.fix_javascript_syntax(lessons_js)

        # Étape 4: Parser le JSON
        lessons_data = self.validate_and_parse_json(fixed_js)

        if not lessons_data:
            print("✗ Aucune donnée valide extraite")
            return False

        # Étape 5: Sauvegarder en TypeScript
        if self.save_typescript_file(lessons_data):
            print(f"✓ Succès: {len(lessons_data)} leçons extraites et sauvegardées")
            return True

        return False

def main():
    """Fonction principale"""
    if len(sys.argv) != 2:
        print("Usage: python extract_lessons_manual.py <chemin_vers_fichier_js>")
        print("Exemple: python extract_lessons_manual.py 'C:/Users/Downloads/KBVLYON/assets/public/assets/PreachingLessonsPage-ErgC5eH2.js'")
        sys.exit(1)

    js_file_path = sys.argv[1]
    extractor = ManualLessonsExtractor()

    success = extractor.process_file(js_file_path)

    if success:
        print("\n✓ Extraction terminée avec succès!")
        print(f"✓ Fichier généré: {extractor.output_file}")
    else:
        print("\n✗ Échec de l'extraction")
        sys.exit(1)

if __name__ == "__main__":
    main()