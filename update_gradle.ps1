# Lire le contenu actuel du fichier
$gradleFile = "android\app\build.gradle"
$content = Get-Content $gradleFile -Raw

# Vérifier si la configuration existe déjà
if ($content -match "signingConfigs") {
    Write-Host "La configuration de signature existe déjà dans le fichier."
    exit
}

# Ajouter les propriétés du keystore après les autres apply plugins
$content = $content -replace '(?s)(apply plugin:.*?\n)\n', "`$1`n// Configuration de signature
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

"

# Ajouter la configuration signingConfigs après android {
$content = $content -replace '(?s)(android \{\s*\n)', "`$1    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
"

# Ajouter signingConfig dans buildTypes release
$content = $content -replace '(?s)(buildTypes \{\s*release \{\s*\n)', "`$1            signingConfig signingConfigs.release
"

# Écrire les modifications dans le fichier
Set-Content -Path $gradleFile -Value $content -NoNewline
Write-Host "Configuration de signature ajoutée avec succès."
