#!/usr/bin/env python3
"""Post-traite le fichier dictionaryData.ts pour supprimer les restes d'anglais.

- Le script détecte les tokens ASCII (sans accents) typiquement anglais dans la traduction PT.
- Les tokens non autorisés sont supprimés. Si le résultat reste vide ou contient encore
  des termes anglais, la traduction est remplacée par "Tradução indisponível".

Usage:
  python scripts/clean_dictionary_pt.py
"""

import json
import re
import os
from typing import List

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TS_PATH = os.path.join(ROOT_DIR, "src", "data", "dictionaryData.ts")

PORTUGUESE_ALLOWED = {
    'de', 'do', 'da', 'das', 'dos', 'o', 'a', 'os', 'as', 'e', 'em', 'para', 'com', 'um', 'uma',
    'que', 'ser', 'ter', 'fazer', 'ir', 'estar', 'mais', 'menos', 'muito', 'pouco', 'grande',
    'pequeno', 'novo', 'velho', 'melhor', 'pior', 'nosso', 'nossa', 'nos', 'seu', 'sua', 'isso',
    'isto', 'aquele', 'aquela', 'estes', 'estas', 'esse', 'essa', 'eles', 'elas', 'eu', 'tu',
    'ele', 'ela', 'nós', 'vocês', 'vos', 'se', 'já', 'não', 'sim', 'onde', 'quando', 'como',
    'porque', 'pois', 'há', 'às', 'ao', 'aos', 'na', 'no', 'nas', 'nos', 'sobre', 'sem', 'entre',
    'até', 'desde', 'após', 'antes', 'durante', 'sempre', 'nunca', 'logo', 'tarde', 'cedo',
    'casa', 'homem', 'mulher', 'criança', 'família', 'pessoas', 'pessoa', 'amigo', 'amigos',
    'irmão', 'irmã', 'pai', 'mãe', 'dia', 'noite', 'semana', 'mês', 'ano', 'anos', 'tempo',
    'qual', 'quem', 'quê', 'por', 'favor', 'graça', 'agora'
}

NON_WORD_PATTERN = re.compile(r"[^\wÀ-ÿ]+", re.UNICODE)
EN_TOKEN_PATTERN = re.compile(r"\b[a-zA-Z]{2,}\b")
WHITESPACE_CHARS = ['\xa0', '\u202f', '\u2007', '\u2009', '\u200a', '\u200b', '\u200c', '\u200d']


def load_dictionary() -> List[dict]:
    with open(TS_PATH, 'r', encoding='utf-8') as f:
        ts_content = f.read()
    start = ts_content.index('[')
    end = ts_content.rindex(']') + 1
    entries = json.loads(ts_content[start:end])
    return entries, ts_content[:start], ts_content[end:]


def detect_english_tokens(text: str) -> List[str]:
    tokens = []
    for token in EN_TOKEN_PATTERN.findall(text or ''):
        lower = token.lower()
        if lower in PORTUGUESE_ALLOWED:
            continue
        tokens.append(token)
    return tokens


def clean_translation(text: str) -> str:
    if not text:
        return ''
    cleaned = text
    for ch in WHITESPACE_CHARS:
        cleaned = cleaned.replace(ch, ' ')
    tokens = detect_english_tokens(cleaned)
    for token in set(tokens):
        cleaned = re.sub(rf"\b{re.escape(token)}\b", ' ', cleaned, flags=re.IGNORECASE)
    cleaned = NON_WORD_PATTERN.sub(' ', cleaned)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    if not cleaned:
        return ''
    if detect_english_tokens(cleaned):
        return ''
    return cleaned


def save_dictionary(entries: List[dict], prefix: str, suffix: str) -> None:
    json_data = json.dumps(entries, ensure_ascii=False, indent=2)
    with open(TS_PATH, 'w', encoding='utf-8') as f:
        f.write(prefix)
        f.write(json_data)
        f.write(suffix)


def main() -> None:
    if not os.path.exists(TS_PATH):
        raise FileNotFoundError(f"Fichier introuvable: {TS_PATH}")

    entries, prefix, suffix = load_dictionary()
    modified = 0
    fallback = 0

    for entry in entries:
        pt = entry['translation']['pt']
        cleaned = clean_translation(pt)
        if cleaned == pt:
            continue
        if cleaned:
            entry['translation']['pt'] = cleaned
            modified += 1
        else:
            entry['translation']['pt'] = 'Tradução indisponível'
            fallback += 1
            modified += 1

    save_dictionary(entries, prefix, suffix)

    print(f"Traductions ajustées: {modified}")
    print(f"Remplacées par défaut: {fallback}")


if __name__ == '__main__':
    main()
