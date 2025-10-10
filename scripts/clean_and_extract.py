#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour nettoyer et extraire le dictionnaire Kabuverdianu depuis un PDF
avec un format de texte mal structuré (tout sur une seule ligne).
"""

import PyPDF2
import re
import json
import os
import time
from typing import Tuple, List, Dict

try:
    import requests
except ImportError:
    requests = None
    import urllib.parse
    import urllib.request

def extract_text_from_pdf(pdf_path):
    """Extrait le texte brut d'un PDF"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            print(f"📄 Lecture du PDF: {len(pdf_reader.pages)} pages")
            
            for page_num, page in enumerate(pdf_reader.pages, 1):
                text += page.extract_text()
                if page_num % 10 == 0:
                    print(f"   Page {page_num}/{len(pdf_reader.pages)}...")
            
            print(f"✓ Texte brut extrait: {len(text)} caractères")
    except Exception as e:
        print(f"❌ Erreur lors de la lecture du PDF: {e}")
        return None
    
    return text

def clean_text(raw_text):
    """Nettoie le texte en remplaçant les tabulations et retours chariot"""
    # Remplacer les multiples espaces/tabulations par un seul espace
    cleaned = re.sub(r'[\t\r]+', ' ', raw_text)
    # Ajouter des sauts de ligne avant chaque nouvelle entrée (mot + type)
    cleaned = re.sub(r'([a-zàáâãèéêìíòóôõùúç]+(?:\s+[a-zàáâãèéêìíòóôõùúç]+)?)\s+(n|v|adj|expr|adv|conj|prep|pro|excl|past\s+part)', r'\n\1 \2', cleaned)
    
    print(f"✓ Texte nettoyé: {len(cleaned)} caractères")
    return cleaned

def translate_to_portuguese(english_text):
    """
    Traduit les définitions anglaises en portugais
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
        'alphabet': 'alfabeto',
        'letter': 'letra',
        'letters': 'letras',
        'eternity': 'eternidade',
        'forehead': 'testa',
        'need': 'necessidade',
        'needs': 'necessidades',
        'needed': 'necessário',
        'thing': 'coisa',
        'things': 'coisas',
        'must': 'deve',
        'should': 'deveria',
        'cause': 'causa',
        'because': 'porque',
        'after': 'depois',
        'before': 'antes',
        'during': 'durante',
        'always': 'sempre',
        'never': 'nunca',
        'sometimes': 'às vezes',
        'soon': 'logo',
        'late': 'tarde',
        'early': 'cedo',
        'home': 'casa',
        'house': 'casa',
        'man': 'homem',
        'woman': 'mulher',
        'child': 'criança',
        'children': 'crianças',
        'family': 'família',
        'people': 'pessoas',
        'person': 'pessoa',
        'friend': 'amigo',
        'friends': 'amigos',
        'brother': 'irmão',
        'sister': 'irmã',
        'father': 'pai',
        'mother': 'mãe',
        'day': 'dia',
        'night': 'noite',
        'week': 'semana',
        'month': 'mês',
        'year': 'ano',
        'years': 'anos'
    }
    
    result = english_text
    for eng, pt in translations.items():
        result = re.sub(r'\b' + eng + r'\b', pt, result, flags=re.IGNORECASE)

    return _normalize_pt_text(result)

def _normalize_pt_text(text: str) -> str:
    if not text:
        return ''
    normalized = text.replace('\xa0', ' ')
    normalized = re.sub(r'\s+', ' ', normalized)
    return normalized.strip()

def detect_english_tokens(text: str) -> List[str]:
    pattern = re.compile(r"\b[a-zA-Z]{2,}\b")
    allowed = {
        'de', 'do', 'da', 'das', 'dos', 'o', 'a', 'os', 'as', 'e', 'em', 'para', 'com', 'um', 'uma',
        'que', 'ser', 'ter', 'fazer', 'ir', 'estar', 'mais', 'menos', 'muito', 'pouco', 'grande',
        'pequeno', 'novo', 'velho', 'melhor', 'pior', 'nosso', 'nossa', 'nos', 'seu', 'sua', 'isso',
        'isto', 'aquele', 'aquela', 'estes', 'estas', 'esse', 'essa', 'eles', 'elas', 'eu', 'tu',
        'ele', 'ela', 'nós', 'vocês', 'vos', 'se', 'já', 'não', 'sim', 'onde', 'quando', 'como',
        'porque', 'pois', 'há', 'às'
    }
    accent_pattern = re.compile(r"[áéíóúãõâêôçà]", re.IGNORECASE)
    tokens: List[str] = []
    for token in pattern.findall(text or ''):
        lower = token.lower()
        if lower in allowed or accent_pattern.search(lower):
            continue
        tokens.append(token)
    return tokens

def remove_english_tokens(text: str, tokens: List[str]) -> str:
    cleaned = text or ''
    cleaned = cleaned.replace('\xa0', ' ')
    for token in set(tokens):
        cleaned = re.sub(r'\b' + re.escape(token) + r'\b', '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'\s{2,}', ' ', cleaned)
    return cleaned.strip()

def load_translation_cache(path: str) -> Dict[str, str]:
    if not os.path.exists(path):
        return {}
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return {}

def save_translation_cache(path: str, cache: Dict[str, str]):
    try:
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(cache, f, ensure_ascii=False, indent=2)
    except Exception as exc:
        print(f"⚠️ Impossible d'enregistrer le cache de traduction: {exc}")

def machine_translate_to_pt(text: str, cache: Dict[str, str]) -> str:
    if not text:
        return ''
    key = text.strip()
    if not key:
        return ''
    if key in cache:
        return cache[key]
    try:
        if requests:
            resp = requests.get(
                'https://api.mymemory.translated.net/get',
                params={'q': key, 'langpair': 'en|pt'},
                timeout=10
            )
            data = resp.json()
        else:
            qs = urllib.parse.urlencode({'q': key, 'langpair': 'en|pt'})
            url = f'https://api.mymemory.translated.net/get?{qs}'
            with urllib.request.urlopen(url, timeout=10) as resp:  # nosec B310
                data = json.loads(resp.read().decode('utf-8'))
        translated = data.get('responseData', {}).get('translatedText') or ''
        cache[key] = translated
        time.sleep(0.3)
        return translated
    except Exception as exc:
        print(f"⚠️ Erreur de traduction automatique: {exc}")
        return ''

def _normalize_word(w: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", w.lower()).strip()

def generate_example_with_ai(word: str, pt_translation: str, wtype: str) -> Tuple[str, str]:
    """Génère un exemple PT/CV de façon déterministe (sans API externe).

    - word: mot en CV
    - pt_translation: définition/équivalent en PT
    - wtype: type lexical détecté (n, v, adj, ...)
    """
    # Choisir un gabarit basique selon le type
    base_pt = pt_translation.split(';')[0].split('.')[0].strip()
    norm = _normalize_word(base_pt)
    # Quelques verbes auxiliaires en PT/CV pour rendre la phrase naturelle
    if re.fullmatch(r"v|verb|verbo", wtype, flags=re.IGNORECASE):
        # Verbes: progressivo/ação presente
        # PT: "Eu estou a {verbo}"; CV: "N sta {word}"
        # Se a tradução começa com "ser ", usar forma de estado
        if norm.startswith("ser "):
            pt = f"Eu sou {norm[4:]}"
            cv = f"N é {word}"
        else:
            pt = f"Eu estou a {norm}"
            cv = f"N sta {word}"
    elif re.fullmatch(r"adj|adjetivo", wtype, flags=re.IGNORECASE):
        pt = f"Isto é {norm}" if norm else f"Isto é bom"
        cv = f"Es é {word}"
    else:  # nom, expr, adv, etc.
        # Noms/expressions: en PT utiliser "Tenho um/uma" ou "Esta/Este"
        if norm:
            pt = f"Tenho um/uma {norm}"
        else:
            pt = "Isto é importante"
        cv = f"N ten un {word}"
    return pt.strip().capitalize() + ".", cv.strip().capitalize() + "."

def parse_dictionary(text):
    """
    Parse le texte nettoyé du dictionnaire
    """
    entries = []
    lines = text.split('\n')
    entry_id = 1
    
    word_types = r'(n|v|adj|expr|adv|conj|prep|pro|excl|past\s+part)'
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        entry_match = re.match(r'^([a-zàáâãèéêìíòóôõùúç]+(?:\s+[a-zàáâãèéêìíòóôõùúç]+)?)\s+' + word_types + r'\s+(.+)$', line, re.IGNORECASE)
        
        if entry_match:
            word = entry_match.group(1).strip()
            wtype = entry_match.group(2).strip()
            definition = entry_match.group(3).strip()
            
            pt_definition = translate_to_portuguese(definition).strip()

            override_pt = OVERRIDDEN_DICTIONARY.get(word.lower())
            if override_pt:
                pt_definition = override_pt
            else:
                english_tokens = detect_english_tokens(pt_definition)
                if english_tokens:
                    auto_pt = machine_translate_to_pt(definition, parse_dictionary.translation_cache)
                    if auto_pt:
                        pt_definition = auto_pt.strip()
                        english_tokens = detect_english_tokens(pt_definition)
                    if english_tokens:
                        pt_definition = remove_english_tokens(pt_definition, english_tokens)

            if not pt_definition:
                pt_definition = 'Definição indisponível'

            if detect_english_tokens(pt_definition):
                pt_definition = 'Definição indisponível'
            
            # Générer les exemples PT/CV via IA simulée
            ex_pt, ex_cv = generate_example_with_ai(word, pt_definition, wtype)
            
            entries.append({
                'id': f'entry-{entry_id}',
                'word': word,
                'translation': {
                    'pt': pt_definition,
                    'cv': word
                },
                'example': {
                    'pt': ex_pt,
                    'cv': ex_cv
                }
            })
            entry_id += 1
            
            if entry_id % 100 == 0:
                print(f"   {entry_id} mots extraits et exemples générés...")
    
    return entries

parse_dictionary.translation_cache: Dict[str, str] = {}

def load_overrides(path: str) -> dict:
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return {}

def apply_overrides_and_deduplicate(entries: list, overrides: dict) -> Tuple[list, dict]:
    """Applique overrides.json, supprime doublons par 'word' (insensible à la casse).
    Retourne (entries_nettoyées, stats)."""
    seen = {}
    duplicates = 0
    overridden = 0
    for e in entries:
        key = e['word'].lower()
        if key in seen:
            duplicates += 1
            # Ignorer l'entrée dupliquée
            continue
        # Overrides
        ov = overrides.get(e['word']) or overrides.get(key)
        if ov:
            overridden += 1
            if 'translation_pt' in ov and ov['translation_pt']:
                e['translation']['pt'] = ov['translation_pt']
            if 'example' in ov and isinstance(ov['example'], dict):
                e['example']['pt'] = ov['example'].get('pt', e['example']['pt'])
                e['example']['cv'] = ov['example'].get('cv', e['example']['cv'])
            if 'category' in ov and ov['category']:
                e['category'] = ov['category']
        seen[key] = e
    cleaned = list(seen.values())
    stats = { 'duplicates_removed': duplicates, 'overrides_applied': overridden, 'final_count': len(cleaned) }
    return cleaned, stats

def validate_entries(entries: list) -> dict:
    """Vérifie des problèmes courants et renvoie des stats/échantillons."""
    empty_examples = []
    bad_translations = []
    english_tokens = []

    for e in entries:
        if not e['example']['pt'] or not e['example']['cv']:
            empty_examples.append(e['word'])

        pt_text = e['translation']['pt']
        if re.search(r"\b(the|and|of|to|with|from)\b", pt_text, re.IGNORECASE):
            bad_translations.append(e['word'])

        tokens_found = detect_english_tokens(pt_text)
        if tokens_found:
            english_tokens.append({
                'word': e['word'],
                'tokens': tokens_found,
                'translation': pt_text
            })

    return {
        'empty_examples_count': len(empty_examples),
        'bad_translations_count': len(bad_translations),
        'empty_examples_sample': empty_examples[:20],
        'bad_translations_sample': bad_translations[:20],
        'english_tokens_count': len(english_tokens),
        'english_tokens_sample': english_tokens[:20],
    }

def generate_typescript_file(entries, output_path):
    """Génère le fichier TypeScript (tri alphabétique par 'word')."""
    entries_sorted = sorted(entries, key=lambda e: e['word'].lower())
    json_data = json.dumps(entries_sorted, ensure_ascii=False, indent=2)
    
    ts_content = f"""// Fichier généré automatiquement depuis le PDF
// Ne pas modifier manuellement

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
  category?: string;
}}

export const dictionaryData: DictionaryEntry[] = {json_data};

export default dictionaryData;
"""
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"✅ Fichier généré: {output_path}")
    print(f"   {len(entries_sorted)} entrées créées (triées)")

def main():
    print("🚀 Nettoyage et extraction du dictionnaire...\n")
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(script_dir)
    pdf_path = os.path.join(project_dir, 'pdfs', 'dicionario.pdf')
    output_path = os.path.join(project_dir, 'src', 'data', 'dictionaryData.ts')
    
    if not os.path.exists(pdf_path):
        print(f"❌ PDF non trouvé: {pdf_path}")
        return
    
    raw_text = extract_text_from_pdf(pdf_path)
    if not raw_text:
        return
    
    cleaned_text = clean_text(raw_text)
    
    print("\n📝 Parsing du dictionnaire...")
    # Préparer le cache de traduction automatique
    translation_cache_path = os.path.join(script_dir, 'translation_cache.json')
    parse_dictionary.translation_cache = load_translation_cache(translation_cache_path)

    entries = parse_dictionary(cleaned_text)
    
    # Overrides + déduplication (fusion overrides.json + overrides-jw.json)
    overrides_path = os.path.join(script_dir, 'overrides.json')
    overrides_jw_path = os.path.join(script_dir, 'overrides-jw.json')
    overrides = load_overrides(overrides_path)
    overrides_jw = load_overrides(overrides_jw_path)
    try:
        # fusion simple (JW a priorité)
        overrides.update(overrides_jw)
    except Exception:
        pass
    entries, ov_stats = apply_overrides_and_deduplicate(entries, overrides)
    
    if not entries:
        print("❌ Aucune entrée extraite")
        return
    
    print(f"✓ {len(entries)} entrées après déduplication (overrides appliqués: {ov_stats['overrides_applied']}, doublons supprimés: {ov_stats['duplicates_removed']})")
    
    # Validation basique
    report = validate_entries(entries)
    report_path = os.path.join(script_dir, 'dictionary_report.txt')
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("Validation du dictionnaire\n")
        f.write(f"Total: {len(entries)}\n")
        f.write(f"Exemples vides: {report['empty_examples_count']}\n")
        f.write(f"Traductions suspectes: {report['bad_translations_count']}\n\n")
        f.write("Exemples vides (échantillon):\n")
        for w in report['empty_examples_sample']:
            f.write(f"- {w}\n")
        f.write("\nTraductions suspectes (échantillon):\n")
        for w in report['bad_translations_sample']:
            f.write(f"- {w}\n")
        f.write("\nTraductions contenant des tokens anglais (total: ")
        f.write(str(report['english_tokens_count']))
        f.write(")\n")
        for item in report['english_tokens_sample']:
            f.write(f"- {item['word']} -> {', '.join(item['tokens'])} :: {item['translation']}\n")
    print(f"🧪 Rapport de validation: {report_path}")
    
    print("\n📄 Génération du fichier TypeScript...")
    generate_typescript_file(entries, output_path)
    
    print("\n✅ Extraction terminée avec succès!")

    save_translation_cache(translation_cache_path, parse_dictionary.translation_cache)

if __name__ == '__main__':
    main()
