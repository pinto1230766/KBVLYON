# Lire le fichier JSON
$json = Get-Content -Path "public\dictionary.json" -Raw | ConvertFrom-Json

# Parcourir chaque entrée et supprimer les traductions en français
foreach ($entry in $json) {
    # Supprimer la traduction française si elle existe
    if ($entry.translation.PSObject.Properties['fr']) {
        $entry.translation.PSObject.Properties.Remove('fr')
    }
    
    # Supprimer les exemples en français s'ils existent
    if ($entry.example -and $entry.example.PSObject.Properties['fr']) {
        $entry.example.PSObject.Properties.Remove('fr')
    }
}

# Convertir en JSON avec une mise en forme propre
$json | ConvertTo-Json -Depth 10 | Set-Content -Path "public\dictionary.json" -Encoding UTF8

Write-Host "Les traductions en français ont été supprimées avec succès!"
