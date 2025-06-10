# Chemin des fichiers
$filePath = Join-Path $PSScriptRoot '..\src\data\grammarData.ts'
$backupPath = Join-Path $PSScriptRoot '..\src\data\grammarData.before-fix.ps1.ts'
$outputPath = Join-Path $PSScriptRoot '..\src\data\grammarData.fixed.ts'

# Créer une sauvegarde
Copy-Item -Path $filePath -Destination $backupPath -Force
Write-Host "Sauvegarde créée : $backupPath" -ForegroundColor Green

# Lire le contenu du fichier
$content = Get-Content -Path $filePath -Raw

# Séparer le contenu en lignes
$lines = [System.IO.File]::ReadAllLines($filePath)

# Variables pour suivre l'état
$inDictionary = $false
$entries = @()
$currentEntry = $null
$entryLines = @()

# Fonction pour traiter une entrée
function Process-Entry {
    param([string[]]$entryLines)
    
    $entryText = $entryLines -join "`n"
    $word = $null
    $translation = $null
    $example = $null
    
    # Extraire les informations de l'entrée
    foreach ($line in $entryLines) {
        $trimmed = $line.Trim()
        
        if ($trimmed -match "word:\s*'([^']+)'") {
            $word = $matches[1]
        }
        elseif ($trimmed -match "translation:\s*\{\s*pt:\s*'([^']*)'\s*,\s*cv:\s*'([^']*)'") {
            $translation = @{
                pt = $matches[1]
                cv = $matches[2]
            }
        }
        elseif ($trimmed -match "example:") {
            $inExample = $true
        }
    }
    
    # Créer un exemple par défaut si nécessaire
    if ($word -and $translation -and !$example) {
        $example = @{
            pt = "Exemplo com $($translation.pt)"
            cv = "$word ta ser un eisemplu"
        }
    }
    
    # Reconstruire l'entrée
    if ($word -and $translation) {
        $entry = "  {"
        $entry += "`n    word: '$($word)',"
        $entry += "`n    translation: {"
        $entry += "`n      pt: '$($translation.pt)',"
        $entry += "`n      cv: '$($translation.cv)'"
        $entry += "`n    },"
        
        if ($example) {
            $entry += "`n    example: {"
            $entry += "`n      pt: '$($example.pt)',"
            $entry += "`n      cv: '$($example.cv)'"
            $entry += "`n    }"
        } else {
            # Si pas d'exemple, en créer un par défaut
            $entry += "`n    example: {"
            $entry += "`n      pt: 'Exemplo com $($translation.pt)',"
            $entry += "`n      cv: '$word ta ser un eisemplu'"
            $entry += "`n    }"
        }
        
        $entry += "`n  }"
        return $entry
    }
    
    return $null
}

# Traiter chaque ligne
$inEntry = $false
$currentEntryLines = @()
$outputLines = @()

foreach ($line in $lines) {
    $trimmed = $line.Trim()
    
    # Vérifier si on est dans la section du dictionnaire
    if ($line -match "export const dictionaryEntries") {
        $inDictionary = $true
        $outputLines += $line
        continue
    }
    
    # Si on est dans le dictionnaire
    if ($inDictionary) {
        # Si on trouve une nouvelle entrée
        if ($trimmed -match '^\s*\{') {
            if ($currentEntryLines.Count -gt 0) {
                # Traiter l'entrée précédente
                $processed = Process-Entry -entryLines $currentEntryLines
                if ($processed) {
                    $outputLines += $processed
                }
                $currentEntryLines = @()
            }
            $inEntry = $true
        }
        
        # Si on est dans une entrée, ajouter la ligne
        if ($inEntry) {
            $currentEntryLines += $line
            
            # Si c'est la fin de l'entrée
            if ($trimmed -match '\}\s*,?\s*$') {
                $inEntry = $false
                
                # Traiter l'entrée complète
                $processed = Process-Entry -entryLines $currentEntryLines
                if ($processed) {
                    $outputLines += $processed
                }
                $currentEntryLines = @()
            }
        } else {
            # Si on est entre les entrées, ajouter la ligne directement
            $outputLines += $line
        }
    } else {
        # Avant le dictionnaire, ajouter la ligne directement
        $outputLines += $line
    }
}

# Écrire le résultat dans un nouveau fichier
$outputLines | Out-File -FilePath $outputPath -Encoding utf8 -Force

Write-Host "`nCorrection terminée !" -ForegroundColor Green
Write-Host "- Fichier corrigé : $outputPath" -ForegroundColor Green
Write-Host "- Sauvegarde : $backupPath" -ForegroundColor Yellow
