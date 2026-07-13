export class CharacterInformationForm {
    private static _formContext: Form.jbdb_character.Main.Information;

    public static executeOnLoad(executionContext: Xrm.OnLoadEventContext) {
        this._formContext = executionContext.getFormContext() as Form.jbdb_character.Main.Information;

        this.autoFillTerritory();
        this.filterFamilyLookup();
    }

    public static autoFillTerritory() {
        const autoFillTerritory = () => {
            const currentFamilyId = this._formContext.getAttribute("jbdb_currentfamily").getValue()?.[0]?.id;

            if (currentFamilyId) {
                Xrm.WebApi.retrieveRecord("jbdb_family", currentFamilyId, "?$select=_jbdb_territory_value&$expand=jbdb_Territory($select=jbdb_name)")
                .then((result) => {
                    if (result.jbdb_Territory) {
                        this._formContext.getAttribute("jbdb_currentterritory").setValue([{
                            id: result.jbdb_Territory.jbdb_territoryid,
                            entityType: "jbdb_territory",
                            name: result.jbdb_Territory.jbdb_name }]);
                    }
                });
            }
        }

        autoFillTerritory();
    }

    public static filterFamilyLookup() {
        const filterFamilyLookup = () => {
            const territoryId = this._formContext.getAttribute("jbdb_currentterritory").getValue()?.[0]?.id;
            if (territoryId) {
                const filter = `<filter type="and">
                    <condition attribute="jbdb_territory" operator="eq" value="${territoryId}" />
                </filter>`;

                this._formContext.getControl("jbdb_currentfamily").addCustomFilter(filter);
            }
        }
        
        this._formContext.getControl("jbdb_currentfamily").addPreSearch(filterFamilyLookup);
    }
}
