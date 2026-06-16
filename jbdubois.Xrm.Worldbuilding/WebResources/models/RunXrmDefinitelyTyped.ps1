# RunXrmDefinitelyTyped.ps1
# Uses a hard-coded Dataverse environment URL with pac auth context

param(
    [string]$CrmUrl = "https://jbduboisdefault.crm.dynamics.com",
    [string]$TypingsDir = "./typings",
    [string]$XrmQueryDir = "./xrmquery"
)

# Path to the XrmDefinitelyTyped executable
$toolPath = "XrmDefinitelyTyped/XrmDefinitelyTyped.exe"

# Ensure output directory exists
if (!(Test-Path $TypingsDir)) {
    New-Item -ItemType Directory -Force -Path $TypingsDir | Out-Null
}

# Build entity list string
$entityList = "jbdb_character,jbdb_characterrelation,jbdb_location,jbdb_region,jbdb_family,jbdb_territory,jbdb_subterritory,jbdb_locationhistory,jbdb_familyhistory"

# Construct OAuth connection string using pac auth context
# pac auth stores your token; you just need to point to the environment

# TokenCacheStorePath
# 
# 
# 
$connectionString = "AuthType=OAuth;Url=$CrmUrl;TokenCacheStorePath=.\MyTokenCache;ClientId=88cc490d-3436-4ccb-bccf-1cb79315c228;RedirectUri=https://localhost;LoginPrompt=Auto"

# Run the generator
& $toolPath `
    /connectionstring:"$connectionString" `
    /method:ConnectionString `
    /entities:$entityList `
    /rest:RestNS `
    /web:WebNs `
    /out:$TypingsDir `
    /url:$CrmUrl `
    /generateMappings:true `
    /jsLib:$XrmQueryDir

Write-Host "XrmDefinitelyTyped completed. Typings generated in $TypingsDir"
