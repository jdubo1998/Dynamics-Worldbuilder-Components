declare namespace RestNS {
  interface jbdb_LocationBase extends RestEntity {
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
    jbdb_LocationId?: string | null;
    jbdb_Name?: string | null;
    jbdb_Region?: SDK.EntityReference | null;
    jbdb_Subterritory?: SDK.EntityReference | null;
    jbdb_Territory?: SDK.EntityReference | null;
    statecode?: SDK.OptionSet<jbdb_location_statecode> | null;
    statuscode?: SDK.OptionSet<jbdb_location_statuscode> | null;
  }
  interface jbdb_Location extends jbdb_LocationBase {
    jbdb_character_CurrentLocation_jbdb_location?: jbdb_Character[] | null;
    jbdb_location_Region_jbdb_region?: jbdb_Region | null;
    jbdb_location_Subterritory_jbdb_subterritory?: jbdb_Subterritory | null;
    jbdb_location_Territory_jbdb_territory?: jbdb_Territory | null;
    jbdb_locationhistory_Location_jbdb_location?: jbdb_LocationHistory[] | null;
  }
  interface jbdb_LocationResult extends jbdb_LocationBase {
    jbdb_character_CurrentLocation_jbdb_location?: SDK.Results<jbdb_CharacterResult> | null;
    jbdb_location_Region_jbdb_region?: jbdb_Region | null;
    jbdb_location_Subterritory_jbdb_subterritory?: jbdb_Subterritory | null;
    jbdb_location_Territory_jbdb_territory?: jbdb_Territory | null;
    jbdb_locationhistory_Location_jbdb_location?: SDK.Results<jbdb_LocationHistoryResult> | null;
  }
  interface jbdb_Location_Select extends jbdb_Location_Expand {
    CreatedBy: RestAttribute<jbdb_Location_Select>;
    CreatedOn: RestAttribute<jbdb_Location_Select>;
    CreatedOnBehalfBy: RestAttribute<jbdb_Location_Select>;
    ImportSequenceNumber: RestAttribute<jbdb_Location_Select>;
    ModifiedBy: RestAttribute<jbdb_Location_Select>;
    ModifiedOn: RestAttribute<jbdb_Location_Select>;
    ModifiedOnBehalfBy: RestAttribute<jbdb_Location_Select>;
    OverriddenCreatedOn: RestAttribute<jbdb_Location_Select>;
    OwnerId: RestAttribute<jbdb_Location_Select>;
    OwningBusinessUnit: RestAttribute<jbdb_Location_Select>;
    OwningTeam: RestAttribute<jbdb_Location_Select>;
    OwningUser: RestAttribute<jbdb_Location_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<jbdb_Location_Select>;
    UTCConversionTimeZoneCode: RestAttribute<jbdb_Location_Select>;
    VersionNumber: RestAttribute<jbdb_Location_Select>;
    jbdb_LocationId: RestAttribute<jbdb_Location_Select>;
    jbdb_Name: RestAttribute<jbdb_Location_Select>;
    jbdb_Region: RestAttribute<jbdb_Location_Select>;
    jbdb_Subterritory: RestAttribute<jbdb_Location_Select>;
    jbdb_Territory: RestAttribute<jbdb_Location_Select>;
    statecode: RestAttribute<jbdb_Location_Select>;
    statuscode: RestAttribute<jbdb_Location_Select>;
  }
  interface jbdb_Location_Filter {
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
    jbdb_LocationId: XQR.Guid;
    jbdb_Name: string;
    jbdb_Region: XQR.EntityReferenceFilter;
    jbdb_Subterritory: XQR.EntityReferenceFilter;
    jbdb_Territory: XQR.EntityReferenceFilter;
    statecode: XQR.ValueContainerFilter<jbdb_location_statecode>;
    statuscode: XQR.ValueContainerFilter<jbdb_location_statuscode>;
  }
  interface jbdb_Location_Expand {
    jbdb_character_CurrentLocation_jbdb_location: RestExpand<jbdb_Location_Select, jbdb_Character_Select>;
    jbdb_location_Region_jbdb_region: RestExpand<jbdb_Location_Select, jbdb_Region_Select>;
    jbdb_location_Subterritory_jbdb_subterritory: RestExpand<jbdb_Location_Select, jbdb_Subterritory_Select>;
    jbdb_location_Territory_jbdb_territory: RestExpand<jbdb_Location_Select, jbdb_Territory_Select>;
    jbdb_locationhistory_Location_jbdb_location: RestExpand<jbdb_Location_Select, jbdb_LocationHistory_Select>;
  }
}
interface RestEntities {
  jbdb_Location: RestMapping<RestNS.jbdb_Location,RestNS.jbdb_Location_Select,RestNS.jbdb_Location_Expand,RestNS.jbdb_Location_Filter,RestNS.jbdb_LocationResult>;
}
