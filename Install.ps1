$PackageName="DnnContra.LegalShield"
$Version="00.01.00"

Push-Location

Remove-Item "tmp" -Recurse -Force -ErrorAction Ignore
New-Item -Path "tmp" -ItemType Directory -Force

Compress-Archive -Path "./*" -DestinationPath "Resources_Skins.zip"
Compress-Archive -Path "./containers/*" -DestinationPath "Resources_Containers.zip"

Copy-Item -Path "./*" -Destination "tmp" -Recurse -Include "*.txt", "*.dnn", "*.zip"

Remove-Item -Path "Resources_Skins.zip"
Remove-Item -Path "Resources_Containers.zip"

Set-Location -Path "tmp"
Compress-Archive -Path "./*" -DestinationPath "$PackageName-$Version-Install.zip"

Pop-Location
