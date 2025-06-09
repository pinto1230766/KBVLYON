# Chemins des fichiers
$dictionaryPath = "d:\CODES\project-bolt-sb1-rrktphbm(1)\src\data\dictionary.ts"
$grammarDataPath = "d:\CODES\project-bolt-sb1-rrktphbm(1)\src\data\grammarData.ts"

# 1. Lire le contenu de grammarData.ts
$grammarContent = Get-Content -Path $grammarDataPath -Raw

# 2. Trouver la fin du tableau dictionaryEntries
$lastBracket = $grammarContent.LastIndexOf(']')
if ($lastBracket -eq -1) {
    Write-Error "Impossible de trouver la fin du tableau dictionaryEntries dans grammarData.ts"
    exit 1
}

# 3. Extraire les entrées manquantes de dictionary.ts
$dictionaryContent = Get-Content -Path $dictionaryPath -Raw

# 4. Trouver les entrées avec les IDs manquants (339-353)
$missingEntries = @()
for ($i = 339; $i -le 353; $i++) {
    $pattern = "id: 'entry-$i',[^}]*?\}"
    $match = [regex]::Match($dictionaryContent, $pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)
    if ($match.Success) {
        $missingEntries += $match.Value
    }
}

if ($missingEntries.Count -eq 0) {
    Write-Host "Aucune entrée manquante trouvée dans dictionary.ts"
    exit 0
}

# 5. Préparer le contenu à ajouter
$entriesToAdd = $missingEntries -join ",`n  "
$newContent = $grammarContent.Insert($lastBracket, ",`n  " + $entriesToAdd)

# 6. Créer une sauvegarde
$backupPath = "$grammarDataPath.bak.$(Get-Date -Format 'yyyyMMddHHmmss')"
Copy-Item -Path $grammarDataPath -Destination $backupPath
Write-Host "Sauvegarde créée : $backupPath"

# 7. Écrire le nouveau contenu
$newContent | Set-Content -Path $grammarDataPath -NoNewline

Write-Host "$($missingEntries.Count) entrées ont été ajoutées à grammarData.ts"
Write-Host "Veuillez vérifier les modifications et redémarrer l'application si nécessaire."
