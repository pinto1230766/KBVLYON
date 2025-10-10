#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour extraire le dictionnaire Kabuverdianu depuis un PDF
et générer le fichier dictionaryData.ts

Format du PDF:
mot n/v/adj/expr définition en portugais/anglais

Génère:
{
  id: "entry-1",
  word: "mot_crioulo",
  translation: {
    pt: "traduction_portugais",
    cv: "mot_crioulo"
  },
  example: {
    pt: "",
    cv: ""
  }
}
"""

import PyPDF2
import re
import json
import os

def extract_text_from_pdf(pdf_path):
    """Extrait le texte d'un PDF"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            print(f"📄 Lecture du PDF: {len(pdf_reader.pages)} pages")
            
            for page_num, page in enumerate(pdf_reader.pages, 1):
                text += page.extract_text()
                if page_num % 10 == 0:
                    print(f"   Page {page_num}/{len(pdf_reader.pages)}...")
            
            print(f"✓ Texte extrait: {len(text)} caractères")
    except Exception as e:
        print(f"❌ Erreur lors de la lecture du PDF: {e}")
        return None
    
    return text

def translate_to_portuguese(english_text):
    """
    Traduit les définitions anglaises en portugais
    Dictionnaire de traductions courantes
    """
    translations = {
        'and': 'e',
        'or': 'ou',
        'the': 'o/a',
        'of': 'de',
        'to': 'para',
        'in': 'em',
        'on': 'em',
        'at': 'em',
        'with': 'com',
        'from': 'de',
        'by': 'por',
        'for': 'para',
        'about': 'sobre',
        'under': 'sob',
        'down below': 'abaixo',
        'brim': 'aba',
        'hat': 'chapéu',
        'outskirts': 'arredores',
        'avocado': 'abacate',
        'shaking': 'agitação',
        'shake': 'agitar',
        'touch': 'tocar',
        'abandon': 'abandonar',
        'advance': 'avanço',
        'supply': 'fornecimento',
        'stock': 'estoque',
        'provisions': 'provisões',
        'bee': 'abelha',
        'honey': 'mel',
        'bless': 'abençoar',
        'wish well': 'desejar bem',
        'open': 'aberto',
        'opening': 'abertura',
        'title': 'título',
        'last name': 'sobrenome',
        'you': 'você',
        'collision': 'colisão',
        'embrace': 'abraço',
        'hug': 'abraço',
        'kiss': 'beijo',
        'yawn': 'bocejar',
        'April': 'Abril',
        'absolve': 'absolver',
        'absolution': 'absolvição',
        'absurd': 'absurdo',
        'abound': 'abundar',
        'abuse': 'abusar',
        'insult': 'insulto',
        'adapt': 'adaptar',
        'goodbye': 'adeus',
        'admiration': 'admiração',
        'noise': 'barulho',
        'sounds': 'sons',
        'screaming': 'gritaria',
        'adjective': 'adjetivo',
        'garlic': 'alho',
        'administrator': 'administrador',
        'administration': 'administração',
    }
    
    # Remplacer les mots anglais par portugais
    result = english_text
    for eng, pt in translations.items():
        result = re.sub(r'\b' + eng + r'\b', pt, result, flags=re.IGNORECASE)
    
    return result

def parse_dictionary(text):
    """
    Parse le texte du dictionnaire et extrait les entrées
    Format: mot type définition
    """
    entries = []
    lines = text.split('\n')
    
    current_word = None
    current_definition = ''
    entry_id = 1
    
    # Types de mots reconnus (plus flexible)
    word_types = r'(n|v|adj|expr|adv|conj|prep|pro|excl|past\s+part)'
    
    for i, line in enumerate(lines):
        line = line.strip()
        
        # Ignorer les lignes vides, numéros de page, titres
        if not line or \
           re.match(r'^pagina \d+$', line, re.IGNORECASE) or \
           re.match(r'^Disonariu Kabuverdianu$', line, re.IGNORECASE) or \
           re.match(r'^\d+$', line) or \
           len(line) < 2:
            continue
        
        # Détecter une nouvelle entrée - Format plus flexible
        # Cherche: mot (lettres minuscules) suivi d'un type puis d'une définition
        entry_match = re.match(r'^([a-zàáâãèéêìíòóôõùúç]+(?:\s+[a-zàáâãèéêìíòóôõùúç]+)?)\s+' + word_types + r'\s+(.+)$', line, re.IGNORECASE)
        
        if entry_match:
            # Sauvegarder l'entrée précédente
            if current_word and current_definition:
                # Traduire en portugais
                pt_definition = translate_to_portuguese(current_definition.strip())
                
                entries.append({
                    'id': f'entry-{entry_id}',
                    'word': current_word.strip(),
                    'translation': {
                        'pt': pt_definition,
                        'cv': current_word.strip()
                    },
                    'example': {
                        'pt': '',
                        'cv': ''
                    }
                })
                entry_id += 1
                
                # Debug: afficher progression tous les 100 mots
                if entry_id % 100 == 0:
                    print(f"   {entry_id} mots extraits...")
            
            # Nouvelle entrée
            current_word = entry_match.group(1).strip()
            current_definition = entry_match.group(3).strip()
        
        # Ligne de continuation (commence par minuscule ou parenthèse)
        elif current_word and (re.match(r'^[a-z(]', line) or '=' in line):
            current_definition += ' ' + line
    
    # Ajouter la dernière entrée
    if current_word and current_definition:
        pt_definition = translate_to_portuguese(current_definition.strip())
        entries.append({
            'id': f'entry-{entry_id}',
            'word': current_word.strip(),
            'translation': {
                'pt': pt_definition,
                'cv': current_word.strip()
            },
            'example': {
                'pt': '',
                'cv': ''
            }
        })
    
    return entries

def generate_typescript_file(entries, output_path):
    """Génère le fichier TypeScript avec les données du dictionnaire"""
    
    # Convertir en JSON avec indentation
    json_data = json.dumps(entries, ensure_ascii=False, indent=2)
    
    # Créer le contenu TypeScript
    ts_content = f"""// Fichier généré automatiquement depuis le PDF
// Ne pas modifier manuellement
// Généré le: {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

export interface DictionaryEntry {{
  id: string;
  word: string;
  translation: {{
    pt: string;
    cv: string;
  }};
  example: {{
    pt: string;
    cv: string;
  }};
  note?: string;
}}

export const dictionaryData: DictionaryEntry[] = {json_data};

export default dictionaryData;
"""
    
    # Écrire le fichier
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"✅ Fichier généré: {output_path}")
    print(f"   {len(entries)} entrées créées")

def main():
    print("🚀 Extraction du dictionnaire Kabuverdianu...\n")
    
    # Chemins
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(script_dir)
    pdf_path = os.path.join(project_dir, 'pdfs', 'dicionario.pdf')
    output_path = os.path.join(project_dir, 'src', 'data', 'dictionaryData.ts')
    
    # Vérifier que le PDF existe
    if not os.path.exists(pdf_path):
        print(f"❌ PDF non trouvé: {pdf_path}")
        print("   Placez votre PDF dans le dossier pdfs/ et nommez-le 'dicionario.pdf'")
        return
    
    # Extraire le texte
    print(f"📖 Lecture de: {os.path.basename(pdf_path)}")
    text = extract_text_from_pdf(pdf_path)
    
    if not text:
        print("❌ Impossible d'extraire le texte du PDF")
        return
    
    # Parser le dictionnaire
    print("\n📝 Parsing du dictionnaire...")
    entries = parse_dictionary(text)
    
    if not entries:
        print("❌ Aucune entrée extraite")
        print("   Vérifiez le format du PDF")
        return
    
    print(f"✓ {len(entries)} entrées extraites")
    
    # Générer le fichier TypeScript
    print("\n📄 Génération du fichier TypeScript...")
    generate_typescript_file(entries, output_path)
    
    print("\n✅ Extraction terminée avec succès!")
    print(f"\n📊 Résumé:")
    print(f"   - {len(entries)} mots extraits")
    print(f"   - Fichier: {output_path}")
    print("\n💡 Les définitions ont été traduites de l'anglais vers le portugais")
    print("   Vérifiez et corrigez les traductions si nécessaire!")

if __name__ == '__main__':
    main()
