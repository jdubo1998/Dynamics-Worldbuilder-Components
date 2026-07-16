param(
    [string]$CrmUrl = "https://jbduboisdefault.crm.dynamics.com",
    [string]$SolutionUniqueName = "RealmofEurosia"
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Push-Location $scriptDir

try {
    Write-Host "*********   Upload Text Lookup Control   *********"

    # pac auth select --url $CrmUrl
    # if ($LASTEXITCODE -ne 0) {
    #     pac auth create --url $CrmUrl
    # }

    pac pcf push --solution-unique-name $SolutionUniqueName

    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error Code=$LASTEXITCODE"
        exit $LASTEXITCODE
    }

    Write-Host
    Write-Host "***   DONE   ***"
} finally {
    Pop-Location
}

Write-Host -NoNewline "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")