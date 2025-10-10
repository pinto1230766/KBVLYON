$mapFile = "C:\Users\FP123\Downloads\KBVLYON\assets\public\assets\PreachingLessonsPage-ErgC5eH2.js.map"
$map = Get-Content $mapFile -Raw | ConvertFrom-Json

Write-Host "Total sources: $($map.sources.Count)`n"

# Afficher toutes les sources pour trouver le bon fichier
for ($i = 0; $i -lt $map.sources.Count; $i++) {
    Write-Host "$i : $($map.sources[$i])"
}

Write-Host "`n`nExtraction de l'index 8..."
$idx = 8
$sourceName = $map.sources[$idx]
$content = $map.sourcesContent[$idx]

Write-Host "Source: $sourceName"
Write-Host "Taille: $($content.Length) caractères"

# Sauvegarder
$outputFile = "d:\PROJETCS APLICATIONS ANDROIDE\APLI PRED\KBVLYON\src\data\extracted_lessons_source.ts"
$content | Out-File -FilePath $outputFile -Encoding UTF8 -NoNewline

Write-Host "`nFichier sauvegardé: $outputFile"

# Afficher les premières lignes
Write-Host "`nPremières 30 lignes:"
$lines = $content -split "`n"
for ($i = 0; $i -lt [Math]::Min(30, $lines.Count); $i++) {
    Write-Host "$($i+1): $($lines[$i])"
}
