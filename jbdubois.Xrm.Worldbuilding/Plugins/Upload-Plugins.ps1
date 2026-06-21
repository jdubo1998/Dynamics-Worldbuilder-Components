param(
    [string]$CrmUrl = "https://jbduboisdefault.crm.dynamics.com"
)

$assemblyPath = ".\bin\Debug\JBDB.WorldBuilder.1.0.0.nupkg"
$pluginId = "CE15DBC7-C16C-F111-AB0D-000D3A37ED40"

Write-Host "*********   Upload Plugin Assembly   *********"

Write-Host "Uploading plugin assembly to $CrmUrl..."
pac plugin push --pluginId $pluginId --pluginFile $assemblyPath

Write-Host
Write-Host "***   DONE   ***"
Write-Host -NoNewline "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
