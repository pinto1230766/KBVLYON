#!/usr/bin/env python3
"""Test script to examine dictionary and spot English tokens"""
import json
import os
import re
from collections import Counter

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT_DIR, 'src', 'data', 'dictionaryData.ts')

with open(PATH, encoding='utf-8') as f:
    ts = f.read()

start = ts.index('[')
end = ts.rindex(']') + 1
entries = json.loads(ts[start:end])

def detect_tokens(text: str, stop):
    words = re.findall(r"[A-Za-z]+", text)
    return [w for w in words if w.lower() not in stop]

pt_stop = {
    'e','de','do','da','das','dos','um','uma','o','os','para','em','que','ou','ao','com','por','se','sobre','no','na','nos','nas','mais','menos','muito','pouco','grande','pequeno','novo','velho','melhor','pior','nosso','nossa','seu','sua','essa','esse','isto','isso','aquele','aquela','estes','estas','ele','ela','eles','elas','eu','tu','você','vocês','nós','já','não','sim','onde','quando','como','porque','pois','há','ser','estar','fazer','ir','ter'
}

counter = Counter()
issues = []
for entry in entries:
    pt = entry['translation']['pt']
    tokens = detect_tokens(pt, pt_stop)
    if tokens:
        counter.update(t.lower() for t in tokens)
        issues.append((entry['word'], pt, tokens))

print('Total issues:', len(issues))
print('Top tokens:', counter.most_common(20))
print('Sample entries:')
for word, pt, tokens in issues[:5]:
    print(word, '=>', pt, '##', tokens)
