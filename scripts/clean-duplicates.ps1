# Chemin du fichier source
$filePath = "$PSScriptRoot\..\src\data\grammarData.ts"
$backupPath = "$PSScriptRoot\..\src\data\grammarData.backup.ts"
$outputPath = "$PSScriptRoot\..\src\data\grammarData.cleaned.ts"

# Créer une sauvegarde si elle n'existe pas
if (-not (Test-Path $backupPath)) {
    Copy-Item -Path $filePath -Destination $backupPath
    Write-Host "Sauvegarde créée : $backupPath" -ForegroundColor Green
}

# Lire le contenu du fichier
$content = Get-Content -Path $filePath -Raw

# Extraire la partie du dictionnaire
$dictionaryStart = $content.IndexOf('export const dictionaryEntries')
$beforeDictionary = $content.Substring(0, $dictionaryStart)
$dictionaryContent = $content.Substring($dictionaryStart)

# Fonction pour nettoyer les entrées
try {
    # Extraire toutes les entrées
    $entries = [System.Collections.ArrayList]@()
    $entryPattern = '(?s){(\s*word:\s*''[^'']*''[^}]+)}'
    $entryMatches = [regex]::Matches($dictionaryContent, $entryPattern)

    $uniqueWords = @{}
    $duplicateCount = 0

    foreach ($match in $entryMatches) {
        $entry = $match.Groups[1].Value
        $wordMatch = [regex]::Match($entry, "word:\s*'([^']+)'")
        
        if ($wordMatch.Success) {
            $word = $wordMatch.Groups[1].Value.Trim().ToLower()
            
            # Vérifier si le mot existe déjà
            if (-not $uniqueWords.ContainsKey($word)) {
                $uniqueWords[$word] = $true
                [void]$entries.Add($entry)
            } else {
                $duplicateCount++
                Write-Host "Doublon supprimé : $word" -ForegroundColor Yellow
            }
        }
    }

    # Reconstruire le contenu nettoyé
    $cleanedContent = $beforeDictionary + "export const dictionaryEntries: DictionaryEntry[] = ["
    
    # Ajouter les entrées uniques
    foreach ($entry in $entries) {
        $cleanedContent += "`n  {" + $entry + "`n  },"
    }
    
    # Supprimer la virgule finale
    $cleanedContent = $cleanedContent.TrimEnd(',')
    $cleanedContent += "\n];"
    
    # Écrire le contenu nettoyé dans un nouveau fichier
    $cleanedContent | Out-File -FilePath $outputPath -Encoding utf8 -Force
    
    Write-Host "\nNettoyage terminé !" -ForegroundColor Green
    Write-Host "- Entrées uniques : $($entries.Count)" -ForegroundColor Cyan
    Write-Host "- Doublons supprimés : $duplicateCount" -ForegroundColor Yellow
    Write-Host "- Fichier nettoyé : $outputPath" -ForegroundColor Green
    
    # Proposer de remplacer le fichier original
    $replace = Read-Host "Voulez-vous remplacer le fichier original par la version nettoyée ? (O/N)"
    if ($replace -eq 'O' -or $replace -eq 'o') {
        Move-Item -Path $outputPath -Destination $filePath -Force
        Write-Host "Fichier original remplacé par la version nettoyée." -ForegroundColor Green
    } else {
        Write-Host "Le fichier original n'a pas été modifié." -ForegroundColor Yellow
        Write-Host "La version nettoyée est disponible ici : $outputPath" -ForegroundColor Cyan
    }
}
catch {
    Write-Host "Une erreur s'est produite : $_" -ForegroundColor Red
    Write-Host "La sauvegarde est disponible ici : $backupPath" -ForegroundColor Cyan
}
