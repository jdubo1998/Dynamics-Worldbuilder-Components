declare namespace RestNS {
  interface jbdb_TerritoryBase extends RestEntity {
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
    jbdb_Region?: SDK.EntityReference | null;
    jbdb_TerritoryId?: string | null;
    statecode?: SDK.OptionSet<jbdb_territory_statecode> | null;
    statuscode?: SDK.OptionSet<jbdb_territory_statuscode> | null;
  }
  interface jbdb_Territory extends jbdb_TerritoryBase {
    jbdb_character_CurrentTerritory_jbdb_territory?: jbdb_Character[] | null;
    jbdb_family_Territory_jbdb_territory?: jbdb_Family[] | null;
    jbdb_location_Territory_jbdb_territory?: jbdb_Location[] | null;
    jbdb_subterritory_Territory_jbdb_territory?: jbdb_Subterritory[] | null;
    jbdb_territory_Region_jbdb_region?: jbdb_Region | null;
  }
  interface jbdb_TerritoryResult extends jbdb_TerritoryBase {
    jbdb_character_CurrentTerritory_jbdb_territory?: SDK.Results<jbdb_CharacterResult> | null;
    jbdb_family_Territory_jbdb_territory?: SDK.Results<jbdb_FamilyResult> | null;
    jbdb_location_Territory_jbdb_territory?: SDK.Results<jbdb_LocationResult> | null;
    jbdb_subterritory_Territory_jbdb_territory?: SDK.Results<jbdb_SubterritoryResult> | null;
    jbdb_territory_Region_jbdb_region?: jbdb_Region | null;
  }
  interface jbdb_Territory_Select extends jbdb_Territory_Expand {
    CreatedBy: RestAttribute<jbdb_Territory_Select>;
    CreatedOn: RestAttribute<jbdb_Territory_Select>;
    CreatedOnBehalfBy: RestAttribute<jbdb_Territory_Select>;
    ImportSequenceNumber: RestAttribute<jbdb_Territory_Select>;
    ModifiedBy: RestAttribute<jbdb_Territory_Select>;
    ModifiedOn: RestAttribute<jbdb_Territory_Select>;
    ModifiedOnBehalfBy: RestAttribute<jbdb_Territory_Select>;
    OverriddenCreatedOn: RestAttribute<jbdb_Territory_Select>;
    OwnerId: RestAttribute<jbdb_Territory_Select>;
    OwningBusinessUnit: RestAttribute<jbdb_Territory_Select>;
    OwningTeam: RestAttribute<jbdb_Territory_Select>;
    OwningUser: RestAttribute<jbdb_Territory_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<jbdb_Territory_Select>;
    UTCConversionTimeZoneCode: RestAttribute<jbdb_Territory_Select>;
    VersionNumber: RestAttribute<jbdb_Territory_Select>;
    jbdb_Name: RestAttribute<jbdb_Territory_Select>;
    jbdb_Region: RestAttribute<jbdb_Territory_Select>;
    jbdb_TerritoryId: RestAttribute<jbdb_Territory_Select>;
    statecode: RestAttribute<jbdb_Territory_Select>;
    statuscode: RestAttribute<jbdb_Territory_Select>;
  }
  interface jbdb_Territory_Filter {
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
    jbdb_Region: XQR.EntityReferenceFilter;
    jbdb_TerritoryId: XQR.Guid;
    statecode: XQR.ValueContainerFilter<jbdb_territory_statecode>;
    statuscode: XQR.ValueContainerFilter<jbdb_territory_statuscode>;
  }
  interface jbdb_Territory_Expand {
    jbdb_character_CurrentTerritory_jbdb_territory: RestExpand<jbdb_Territory_Select, jbdb_Character_Select>;
    jbdb_family_Territory_jbdb_territory: RestExpand<jbdb_Territory_Select, jbdb_Family_Select>;
    jbdb_location_Territory_jbdb_territory: RestExpand<jbdb_Territory_Select, jbdb_Location_Select>;
    jbdb_subterritory_Territory_jbdb_territory: RestExpand<jbdb_Territory_Select, jbdb_Subterritory_Select>;
    jbdb_territory_Region_jbdb_region: RestExpand<jbdb_Territory_Select, jbdb_Region_Select>;
  }
}
interface RestEntities {
  jbdb_Territory: RestMapping<RestNS.jbdb_Territory,RestNS.jbdb_Territory_Select,RestNS.jbdb_Territory_Expand,RestNS.jbdb_Territory_Filter,RestNS.jbdb_TerritoryResult>;
}
