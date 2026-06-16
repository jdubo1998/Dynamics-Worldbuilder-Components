declare namespace RestNS {
  interface jbdb_RegionBase extends RestEntity {
    CreatedBy?: SDK.EntityReference | null;
    CreatedOn?: Date | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    ImportSequenceNumber?: number | null;
    ModifiedBy?: SDK.EntityReference | null;
    ModifiedOn?: Date | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    OverriddenCreatedOn?: Date | null;
    OwnerId?: SDK.EntityReference | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    OwningTeam?: SDK.EntityReference | null;
    OwningUser?: SDK.EntityReference | null;
    TimeZoneRuleVersionNumber?: number | null;
    UTCConversionTimeZoneCode?: number | null;
    VersionNumber?: number | null;
    jbdb_Name?: string | null;
    jbdb_RegionId?: string | null;
    statecode?: SDK.OptionSet<jbdb_region_statecode> | null;
    statuscode?: SDK.OptionSet<jbdb_region_statuscode> | null;
  }
  interface jbdb_Region extends jbdb_RegionBase {
    jbdb_location_Region_jbdb_region?: jbdb_Location[] | null;
    jbdb_territory_Region_jbdb_region?: jbdb_Territory[] | null;
  }
  interface jbdb_RegionResult extends jbdb_RegionBase {
    jbdb_location_Region_jbdb_region?: SDK.Results<jbdb_LocationResult> | null;
    jbdb_territory_Region_jbdb_region?: SDK.Results<jbdb_TerritoryResult> | null;
  }
  interface jbdb_Region_Select extends jbdb_Region_Expand {
    CreatedBy: RestAttribute<jbdb_Region_Select>;
    CreatedOn: RestAttribute<jbdb_Region_Select>;
    CreatedOnBehalfBy: RestAttribute<jbdb_Region_Select>;
    ImportSequenceNumber: RestAttribute<jbdb_Region_Select>;
    ModifiedBy: RestAttribute<jbdb_Region_Select>;
    ModifiedOn: RestAttribute<jbdb_Region_Select>;
    ModifiedOnBehalfBy: RestAttribute<jbdb_Region_Select>;
    OverriddenCreatedOn: RestAttribute<jbdb_Region_Select>;
    OwnerId: RestAttribute<jbdb_Region_Select>;
    OwningBusinessUnit: RestAttribute<jbdb_Region_Select>;
    OwningTeam: RestAttribute<jbdb_Region_Select>;
    OwningUser: RestAttribute<jbdb_Region_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<jbdb_Region_Select>;
    UTCConversionTimeZoneCode: RestAttribute<jbdb_Region_Select>;
    VersionNumber: RestAttribute<jbdb_Region_Select>;
    jbdb_Name: RestAttribute<jbdb_Region_Select>;
    jbdb_RegionId: RestAttribute<jbdb_Region_Select>;
    statecode: RestAttribute<jbdb_Region_Select>;
    statuscode: RestAttribute<jbdb_Region_Select>;
  }
  interface jbdb_Region_Filter {
    CreatedBy: XQR.EntityReferenceFilter;
    CreatedOn: Date;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    ImportSequenceNumber: number;
    ModifiedBy: XQR.EntityReferenceFilter;
    ModifiedOn: Date;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    OverriddenCreatedOn: Date;
    OwnerId: XQR.EntityReferenceFilter;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    OwningTeam: XQR.EntityReferenceFilter;
    OwningUser: XQR.EntityReferenceFilter;
    TimeZoneRuleVersionNumber: number;
    UTCConversionTimeZoneCode: number;
    VersionNumber: number;
    jbdb_Name: string;
    jbdb_RegionId: XQR.Guid;
    statecode: XQR.ValueContainerFilter<jbdb_region_statecode>;
    statuscode: XQR.ValueContainerFilter<jbdb_region_statuscode>;
  }
  interface jbdb_Region_Expand {
    jbdb_location_Region_jbdb_region: RestExpand<jbdb_Region_Select, jbdb_Location_Select>;
    jbdb_territory_Region_jbdb_region: RestExpand<jbdb_Region_Select, jbdb_Territory_Select>;
  }
}
interface RestEntities {
  jbdb_Region: RestMapping<RestNS.jbdb_Region,RestNS.jbdb_Region_Select,RestNS.jbdb_Region_Expand,RestNS.jbdb_Region_Filter,RestNS.jbdb_RegionResult>;
}
