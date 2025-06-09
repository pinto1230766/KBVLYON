$grammarDataPath = "d:\CODES\project-bolt-sb1-rrktphbm(1)\src\data\grammarData.ts"
$dictionaryPath = "d:\CODES\project-bolt-sb1-rrktphbm(1)\src\data\dictionary.ts"

# Fonction pour extraire les entrées d'un fichier
function Get-DictionaryEntries($filePath) {
    $content = Get-Content $filePath -Raw
    $entries = @()
    
    $pattern = "id: 'entry-(?<id>\d+)'.*?word: '(?<word>[^']+)'"
    $matches = [regex]::Matches($content, $pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)
    
    foreach ($match in $matches) {
        $entries += [PSCustomObject]@{
            Id = $match.Groups['id'].Value
            Word = $match.Groups['word'].Value
        }
    }
    
    return $entries
}

# Récupérer les entrées des deux fichiers
Write-Host "Lecture de $grammarDataPath..."
$grammarEntries = Get-DictionaryEntries $grammarDataPath
Write-Host "  - $($grammarEntries.Count) entrées trouvées"

Write-Host "\nLecture de $dictionaryPath..."
$dictEntries = Get-DictionaryEntries $dictionaryPath
Write-Host "  - $($dictEntries.Count) entrées trouvées"

# Trouver les entrées manquantes
$missingEntries = @()
foreach ($entry in $dictEntries) {
    if (-not ($grammarEntries | Where-Object { $_.Id -eq $entry.Id })) {
        $missingEntries += $entry
    }
}

# Afficher les résultats
Write-Host "\n=== ENTREES MANQUANTES ==="
Write-Host "Nombre d'entrées manquantes: $($missingEntries.Count)"

if ($missingEntries.Count -gt 0) {
    $missingEntries | Format-Table -AutoSize | Out-String -Width 1000 | Write-Host
}

# Vérifier les doublons dans grammarData.ts
$duplicates = $grammarEntries | Group-Object Id | Where-Object { $_.Count -gt 1 }
Write-Host "\n=== DOUBLONS DANS grammarData.ts ==="
if ($duplicates.Count -eq 0) {
    Write-Host "Aucun doublon trouvé."
} else {
    Write-Host "$($duplicates.Count) doublons trouvés :"
    $duplicates | ForEach-Object { 
        $id = $_.Name
        $words = $_.Group.Word -join ", "
        Write-Host "- ID $id : $words"
    }
}
