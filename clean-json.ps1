# Lire le contenu du fichier
$content = Get-Content -Path "public\dictionary.json" -Raw -Encoding UTF8

# Remplacer les séquences problématiques
$cleanContent = $content -replace '[\u0000-\u0019\u007F-\u009F]', '' # Supprimer les caractères de contrôle
$cleanContent = $cleanContent -replace 'ï¿½', '' # Supprimer les séquences 'ï¿½'
$cleanContent = $cleanContent -replace '[\u201C\u201D]', '\"' # Remplacer les guillemets courbes
$cleanContent = $cleanContent -replace '[\u2018\u2019]', "'" # Remplacer les apostrophes courbes

# Réparer les guillemets échappés dans les chaînes
$cleanContent = $cleanContent -replace '\\"', '"'

# Réparer les virgules en fin de tableau
$cleanContent = $cleanContent -replace ',\s*\]', ']'

# Écrire le fichier nettoyé
[System.IO.File]::WriteAllText("public\dictionary_clean.json", $cleanContent, [System.Text.Encoding]::UTF8)

Write-Host "Nettoyage terminé. Fichier de sortie : public\dictionary_clean.json"
