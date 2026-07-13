param(
    [string]$CrmUrl = "https://jbduboisdefault.crm.dynamics.com"
)

$assemblyPath = ".\bin\Debug\WorldBuilder.Plugins.1.0.0.nupkg"
$pluginId = "92bad49c-5a7b-f111-ab0e-000d3a5d3b04"

Write-Host "*********   Upload Plugin Assembly   *********"

Write-Host "Uploading plugin assembly to $CrmUrl..."
pac plugin push --pluginId $pluginId --pluginFile $assemblyPath

Write-Host
Write-Host "***   DONE   ***"
Write-Host -NoNewline "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
