# Configuration
$projectPath = "d:\CODES\project-bolt-sb1-rrktphbm(1)"
$backupDir = "d:\CODES\backups"
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupName = "project-bolt-sb1-backup_$timestamp"
$backupPath = Join-Path -Path $backupDir -ChildPath $backupName
$zipFile = "$backupPath.zip"

# Créer le répertoire de sauvegarde s'il n'existe pas
if (-not (Test-Path -Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Host "Répertoire de sauvegarde créé : $backupDir"
}

# Créer un répertoire temporaire pour la sauvegarde
$tempBackupDir = Join-Path -Path $env:TEMP -ChildPath $backupName
if (Test-Path -Path $tempBackupDir) {
    Remove-Item -Path $tempBackupDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempBackupDir | Out-Null

Write-Host "Création de la sauvegarde du projet..."

# Copier les fichiers du projet (en excluant node_modules et autres dossiers inutiles)
$excludeDirs = @('node_modules', '.git', '.vscode', '.idea', 'dist', 'build', 'coverage', '*.log', '.DS_Store')
$excludeArgs = $excludeDirs | ForEach-Object { "-xr!$_" }

# Utiliser robocopy pour une copie fiable
robocopy $projectPath $tempBackupDir /E /XD node_modules .git .vscode .idea dist build coverage /XF *.log *.tmp .DS_Store /NFL /NDL /NJH /NJS /nc /ns /np

# Vérifier si la copie a réussi
if ($LASTEXITCODE -lt 8) {
    # Créer une archive ZIP
    Add-Type -Assembly "System.IO.Compression.FileSystem"
    [System.IO.Compression.ZipFile]::CreateFromDirectory($tempBackupDir, $zipFile, [System.IO.Compression.CompressionLevel]::Optimal, $false)
    
    # Vérifier la taille de l'archive
    $fileSize = (Get-Item $zipFile).Length / 1MB
    $fileSize = [math]::Round($fileSize, 2)
    
    # Nettoyer le répertoire temporaire
    Remove-Item -Path $tempBackupDir -Recurse -Force
    
    Write-Host "`nSauvegarde terminée avec succès !"
    Write-Host "Fichier de sauvegarde : $zipFile"
    Write-Host "Taille : $fileSize Mo"
    
    # Vérifier l'espace disque restant
    $drive = (Get-Item $backupDir).Root
    $driveInfo = Get-PSDrive $drive.Name
    $freeSpaceGB = [math]::Round($driveInfo.Free / 1GB, 2)
    Write-Host "Espace disque restant sur $($drive.Name) : $freeSpaceGB Go"
    
    # Ouvrir l'explorateur Windows à l'emplacement de la sauvegarde
    explorer "/select,$zipFile"
} else {
    Write-Error "Erreur lors de la copie des fichiers. Code de sortie : $LASTEXITCODE"
    exit 1
}
