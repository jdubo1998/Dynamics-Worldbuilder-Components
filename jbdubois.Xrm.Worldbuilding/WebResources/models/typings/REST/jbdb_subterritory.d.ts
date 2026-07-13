declare namespace RestNS {
  interface jbdb_SubterritoryBase extends RestEntity {
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
    jbdb_SubterritoryId?: string | null;
    jbdb_Territory?: SDK.EntityReference | null;
    statecode?: SDK.OptionSet<jbdb_subterritory_statecode> | null;
    statuscode?: SDK.OptionSet<jbdb_subterritory_statuscode> | null;
  }
  interface jbdb_Subterritory extends jbdb_SubterritoryBase {
    jbdb_character_CurrentSubterritory_jbdb_subterritory?: jbdb_Character[] | null;
    jbdb_family_SubterritoryId_jbdb_subterritory?: jbdb_Family[] | null;
    jbdb_location_Subterritory_jbdb_subterritory?: jbdb_Location[] | null;
    jbdb_subterritory_Territory_jbdb_territory?: jbdb_Territory | null;
  }
  interface jbdb_SubterritoryResult extends jbdb_SubterritoryBase {
    jbdb_character_CurrentSubterritory_jbdb_subterritory?: SDK.Results<jbdb_CharacterResult> | null;
    jbdb_family_SubterritoryId_jbdb_subterritory?: SDK.Results<jbdb_FamilyResult> | null;
    jbdb_location_Subterritory_jbdb_subterritory?: SDK.Results<jbdb_LocationResult> | null;
    jbdb_subterritory_Territory_jbdb_territory?: jbdb_Territory | null;
  }
  interface jbdb_Subterritory_Select extends jbdb_Subterritory_Expand {
    CreatedBy: RestAttribute<jbdb_Subterritory_Select>;
    CreatedOn: RestAttribute<jbdb_Subterritory_Select>;
    CreatedOnBehalfBy: RestAttribute<jbdb_Subterritory_Select>;
    ImportSequenceNumber: RestAttribute<jbdb_Subterritory_Select>;
    ModifiedBy: RestAttribute<jbdb_Subterritory_Select>;
    ModifiedOn: RestAttribute<jbdb_Subterritory_Select>;
    ModifiedOnBehalfBy: RestAttribute<jbdb_Subterritory_Select>;
    OverriddenCreatedOn: RestAttribute<jbdb_Subterritory_Select>;
    OwnerId: RestAttribute<jbdb_Subterritory_Select>;
    OwningBusinessUnit: RestAttribute<jbdb_Subterritory_Select>;
    OwningTeam: RestAttribute<jbdb_Subterritory_Select>;
    OwningUser: RestAttribute<jbdb_Subterritory_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<jbdb_Subterritory_Select>;
    UTCConversionTimeZoneCode: RestAttribute<jbdb_Subterritory_Select>;
    VersionNumber: RestAttribute<jbdb_Subterritory_Select>;
    jbdb_Name: RestAttribute<jbdb_Subterritory_Select>;
    jbdb_SubterritoryId: RestAttribute<jbdb_Subterritory_Select>;
    jbdb_Territory: RestAttribute<jbdb_Subterritory_Select>;
    statecode: RestAttribute<jbdb_Subterritory_Select>;
    statuscode: RestAttribute<jbdb_Subterritory_Select>;
  }
  interface jbdb_Subterritory_Filter {
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
    jbdb_SubterritoryId: XQR.Guid;
    jbdb_Territory: XQR.EntityReferenceFilter;
    statecode: XQR.ValueContainerFilter<jbdb_subterritory_statecode>;
    statuscode: XQR.ValueContainerFilter<jbdb_subterritory_statuscode>;
  }
  interface jbdb_Subterritory_Expand {
    jbdb_character_CurrentSubterritory_jbdb_subterritory: RestExpand<jbdb_Subterritory_Select, jbdb_Character_Select>;
    jbdb_family_SubterritoryId_jbdb_subterritory: RestExpand<jbdb_Subterritory_Select, jbdb_Family_Select>;
    jbdb_location_Subterritory_jbdb_subterritory: RestExpand<jbdb_Subterritory_Select, jbdb_Location_Select>;
    jbdb_subterritory_Territory_jbdb_territory: RestExpand<jbdb_Subterritory_Select, jbdb_Territory_Select>;
  }
}
interface RestEntities {
  jbdb_Subterritory: RestMapping<RestNS.jbdb_Subterritory,RestNS.jbdb_Subterritory_Select,RestNS.jbdb_Subterritory_Expand,RestNS.jbdb_Subterritory_Filter,RestNS.jbdb_SubterritoryResult>;
}
