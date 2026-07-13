Write-Host "*********   Upload Spkl Steps   *********"

# Path to the Tools folder relative to Plugins
$toolsPath = Join-Path $PSScriptRoot "..\Tools"

# Locate SPKL folder
$spklFolder = Get-ChildItem $toolsPath -Directory -Filter "spkl.*" | Select-Object -First 1

if (-not $spklFolder) {
    throw "SPKL folder not found in $toolsPath"
}

# Path to spkl.exe
$spklExe = Join-Path $spklFolder.FullName "\spkl.exe"

Write-Host "Using SPKL at: $spklExe"

& $spklExe plugins /p:debug
