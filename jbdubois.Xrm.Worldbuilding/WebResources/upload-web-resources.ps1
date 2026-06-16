param(
    [int[]]$FileIndexesInput,
    [string]$CrmUrl = "https://jbduboisdefault.crm.dynamics.com"
)

$scriptsDir = ".\dist"
$dynamicsDir = "jbdb_/scripts"

$jsFiles = @(Get-ChildItem -Path $scriptsDir -Recurse -Filter "*.js" | Select-Object Name, FullName, @{ n = "Folder"; e = { ($_.PSPath -split '[\\]')[-2] } })
Write-Host "*********   Upload Web Resources   *********"

Write-Host "Script List:"
for ($i = 0; $i -lt $jsFiles.Count; $i++) {
    $jsFile = $jsFiles[$i]
    Write-Host "[$i]   $($jsFile.Folder)/$($jsFile.Name)"
}

if ($FileIndexesInput -eq $null) {
    Write-Host
    $FileIndexesInput = (Read-Host "Choose which scripts to upload (enter the number, comma-separated if selecting multiple)" -split ",") | ForEach-Object { [int]$_ }
}

$connectionString = "AuthType=OAuth;Url=$CrmUrl;TokenCacheStorePath=.\MyTokenCache;ClientId=88cc490d-3436-4ccb-bccf-1cb79315c228;RedirectUri=https://localhost;LoginPrompt=Auto"

Write-Host
Write-Host "Connecting to CRM..."
$connection = Get-CrmConnection -connectionString $connectionString
$token = $connection.CurrentAccessToken

for ($i = 0; $i -lt $FileIndexesInput.Count; $i++) {
    $fileIndex = [int]$FileIndexesInput[$i]
    $scriptPath = $jsFiles[$fileIndex].FullName
    $scriptFolder = $jsFiles[$fileIndex].Folder
    $scriptName = $jsFiles[$fileIndex].Name

    if ($fileIndex -ge 0 -and $fileIndex -lt $jsFiles.Count) {
        $crmResourceName = "$dynamicsDir/$scriptFolder/$scriptName"
        Write-Host
        Write-Host "Retrieving ID for existing Web Resource path: $crmResourceName..."
        
        $query = $CrmUrl + '/api/data/v9.2/webresourceset?$select=webresourceid,name&$filter=name eq ''' + $crmResourceName + '''&$top=1'
        $wrResult = Invoke-RestMethod -Uri $query -Headers @{Authorization = "Bearer $token"}

        if ($wrResult.value -and $wrResult.value.webresourceid) {
            $webResourceId = $wrResult.value.webresourceid

            Write-Host -NoNewline "Uploading Web Resource: $scriptName ($($webResourceId))..."
            $bytes = [System.IO.File]::ReadAllBytes($scriptPath)
            $base64Content = [System.Convert]::ToBase64String($bytes, [System.Base64FormattingOptions]::None)

            $updateQuery = $CrmUrl + '/api/data/v9.2/webresourceset(' + $webResourceId + ')'
            $body = @{
                "content" = $base64Content
            }
            Invoke-RestMethod -Method Patch -Uri $updateQuery -ContentType "application/json" -Headers @{Authorization = "Bearer $token"} -Body ($body | ConvertTo-Json)

            Write-Host "Publishing: $scriptName ($($webResourceId))..."
            $publishQuery = ($CrmUrl + '/api/data/v9.0/PublishXml')
            $publishBody = @{
                "ParameterXml" = "<importexportxml><webresources><webresource>$webResourceId</webresource></webresources></importexportxml>"
            }
            Invoke-RestMethod -Method Post -Uri $publishQuery -ContentType "application/json" -Headers @{Authorization = "Bearer $token"} -Body ($publishBody | ConvertTo-Json)
        } else {
            Write-Host "Web resource not found: $crmResourceName"
        }
    }
}

Write-Host
Write-Host "***   DONE   ***"
Write-Host -NoNewline "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")