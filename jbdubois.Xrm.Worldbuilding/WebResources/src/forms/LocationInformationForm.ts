import { GuidUtility } from "../logic/GuidUtility";

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
                Xrm.WebApi.retrieveRecord("jbdb_subterritory", subterritoryId, "?$select=_jbdb_territory_value")
                .then((result) => {
                    if (!GuidUtility.compareGuids(result._jbdb_territory_value, territoryId)) {
                        this._formContext.getAttribute("jbdb_territory").setValue([{
                            id: result._jbdb_territory_value,
                            entityType: "jbdb_territory",
                            name: result['_jbdb_territory_value@OData.Community.Display.V1.FormattedValue'] }]);
                        this._formContext.getAttribute("jbdb_territory").fireOnChange();
                    }
                });

                this._formContext.getControl("jbdb_territory").setDisabled(true);
            } else {
                this._formContext.getControl("jbdb_territory").setDisabled(false);
            }
        };

        const onTerritoryChange = () => {
            const territoryId = this._formContext.getAttribute("jbdb_territory").getValue()?.[0]?.id;
            const regionId = this._formContext.getAttribute("jbdb_region").getValue()?.[0]?.id;

            if (territoryId) {
                Xrm.WebApi.retrieveRecord("jbdb_territory", territoryId, "?$select=_jbdb_region_value")
                .then((result) => {
                    if (!GuidUtility.compareGuids(result._jbdb_region_value, regionId)) {
                        this._formContext.getAttribute("jbdb_region").setValue([{
                            id: result._jbdb_region_value,
                            entityType: "jbdb_region",
                            name: result['_jbdb_region_value@OData.Community.Display.V1.FormattedValue'] }]);
                    }
                });
                
                this._formContext.getControl("jbdb_region").setDisabled(true);
            } else {
                this._formContext.getControl("jbdb_region").setDisabled(false);
            }
        };

        const filterSubterritoryLookup = () => {
            const territoryId = this._formContext.getAttribute("jbdb_territory").getValue()?.[0]?.id;

            if (territoryId) {
                const filter = `<filter type="and">
                    <condition attribute="jbdb_territory" operator="eq" value="${territoryId}" />
                </filter>`;

                this._formContext.getControl("jbdb_subterritory").addCustomFilter(filter);
            }
        }

        const filterTerritoryLookup = () => {
            const regionId = this._formContext.getAttribute("jbdb_region").getValue()?.[0]?.id;

            if (regionId) {
                const filter = `<filter type="and">
                    <condition attribute="jbdb_region" operator="eq" value="${regionId}" />
                </filter>`;

                this._formContext.getControl("jbdb_territory").addCustomFilter(filter);
            }
        }

        this._formContext.getAttribute("jbdb_subterritory").addOnChange(onSubterritoryChange);
        this._formContext.getAttribute("jbdb_territory").addOnChange(onTerritoryChange);

        this._formContext.getControl("jbdb_subterritory").addPreSearch(filterSubterritoryLookup);
        this._formContext.getControl("jbdb_territory").addPreSearch(filterTerritoryLookup);

        onSubterritoryChange();
        onTerritoryChange();
    }
}