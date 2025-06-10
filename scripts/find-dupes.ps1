$filePath = "$PSScriptRoot\..\src\data\grammarData.ts"
$content = Get-Content -Path $filePath -Raw

# Extraire tous les mots du dictionnaire
$wordMatches = [regex]::Matches($content, 'word: ''([^'']+)''')

# Compter les occurrences de chaque mot
$wordCounts = @{}
foreach ($match in $wordMatches) {
    $word = $match.Groups[1].Value.Trim().ToLower()
    if ($wordCounts.ContainsKey($word)) {
        $wordCounts[$word]++
    } else {
        $wordCounts[$word] = 1
    }
}

# Filtrer les mots qui apparaissent plus d'une fois
$duplicates = $wordCounts.GetEnumerator() | Where-Object { $_.Value -gt 1 } | Sort-Object Key

# Afficher les résultats
if ($duplicates.Count -gt 0) {
    Write-Host "`nMots en double trouvés ($($duplicates.Count)) :" -ForegroundColor Red
    Write-Host ("-" * 50) -ForegroundColor Yellow
    
    foreach ($dup in $duplicates) {
        $word = $dup.Key
        $count = $dup.Value
        
        Write-Host "`n$word (x$count)" -ForegroundColor Cyan
        
        # Trouver et afficher les lignes complètes des entrées en double
        $lineMatches = [regex]::Matches($content, "word: '$word'[^}]+}")
        for ($i = 0; $i -lt $lineMatches.Count; $i++) {
            $entry = $lineMatches[$i].Value -replace '\s+', ' '
            Write-Host "  $($i + 1). $entry" -ForegroundColor Gray
        }
    }
    
    Write-Host "`nTotal de mots en double: $($duplicates.Count)" -ForegroundColor Green
} else {
    Write-Host "`nAucun mot en double trouvé dans le dictionnaire." -ForegroundColor Green
}
