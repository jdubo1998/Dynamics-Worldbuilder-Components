export class LocationInformationForm {
    private static _formContext: Form.jbdb_location.Main.Information;

    public static executeOnLoad(executionContext: Xrm.OnLoadEventContext) {
        this._formContext = executionContext.getFormContext() as Form.jbdb_location.Main.Information;

        this.autoFillGeographyAndLockFields();
    }

    private static autoFillGeographyAndLockFields() {
        const onSubterritoryChange = () => {
            const subterritoryId = this._formContext.getAttribute("jbdb_subterritory").getValue()?.[0]?.id;
            const territoryId = this._formContext.getAttribute("jbdb_territory").getValue()?.[0]?.id;

            if (subterritoryId) {
                Xrm.WebApi.retrieveRecord("jbdb_subterritory", subterritoryId, "?$select=jbdb_territory")
                .then((result) => {
                    if (result.jbdb_territory !== territoryId) {
                        this._formContext.getAttribute("jbdb_territory").setValue(result.jbdb_region);
                    }
                });

                this._formContext.getControl("jbdb_territory").setDisabled(true);
            }
        };

        const onTerritoryChange = () => {
            const territoryId = this._formContext.getAttribute("jbdb_territory").getValue()?.[0]?.id;
            const regionId = this._formContext.getAttribute("jbdb_region").getValue()?.[0]?.id;

            if (territoryId) {
                Xrm.WebApi.retrieveRecord("jbdb_territory", territoryId, "?$select=jbdb_region")
                .then((result) => {
                    if (result.jbdb_region !== regionId) {
                        this._formContext.getAttribute("jbdb_region").setValue(result.jbdb_region);
                    }
                });
                
                this._formContext.getControl("jbdb_region").setDisabled(true);
            }
        };

        onSubterritoryChange();
        onTerritoryChange();

        this._formContext.getAttribute("jbdb_subterritory").addOnChange(onSubterritoryChange);
        this._formContext.getAttribute("jbdb_territory").addOnChange(onTerritoryChange);
    }
}