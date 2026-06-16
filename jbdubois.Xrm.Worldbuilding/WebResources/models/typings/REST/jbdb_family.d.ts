declare namespace RestNS {
  interface jbdb_FamilyBase extends RestEntity {
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
    jbdb_FamilyId?: string | null;
    jbdb_Name?: string | null;
    jbdb_Territory?: SDK.EntityReference | null;
    statecode?: SDK.OptionSet<jbdb_family_statecode> | null;
    statuscode?: SDK.OptionSet<jbdb_family_statuscode> | null;
  }
  interface jbdb_Family extends jbdb_FamilyBase {
    jbdb_character_CurrentFamily_jbdb_family?: jbdb_Character[] | null;
    jbdb_family_Territory_jbdb_territory?: jbdb_Territory | null;
    jbdb_familyhistory_Family_jbdb_family?: jbdb_FamilyHistory[] | null;
  }
  interface jbdb_FamilyResult extends jbdb_FamilyBase {
    jbdb_character_CurrentFamily_jbdb_family?: SDK.Results<jbdb_CharacterResult> | null;
    jbdb_family_Territory_jbdb_territory?: jbdb_Territory | null;
    jbdb_familyhistory_Family_jbdb_family?: SDK.Results<jbdb_FamilyHistoryResult> | null;
  }
  interface jbdb_Family_Select extends jbdb_Family_Expand {
    CreatedBy: RestAttribute<jbdb_Family_Select>;
    CreatedOn: RestAttribute<jbdb_Family_Select>;
    CreatedOnBehalfBy: RestAttribute<jbdb_Family_Select>;
    ImportSequenceNumber: RestAttribute<jbdb_Family_Select>;
    ModifiedBy: RestAttribute<jbdb_Family_Select>;
    ModifiedOn: RestAttribute<jbdb_Family_Select>;
    ModifiedOnBehalfBy: RestAttribute<jbdb_Family_Select>;
    OverriddenCreatedOn: RestAttribute<jbdb_Family_Select>;
    OwnerId: RestAttribute<jbdb_Family_Select>;
    OwningBusinessUnit: RestAttribute<jbdb_Family_Select>;
    OwningTeam: RestAttribute<jbdb_Family_Select>;
    OwningUser: RestAttribute<jbdb_Family_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<jbdb_Family_Select>;
    UTCConversionTimeZoneCode: RestAttribute<jbdb_Family_Select>;
    VersionNumber: RestAttribute<jbdb_Family_Select>;
    jbdb_FamilyId: RestAttribute<jbdb_Family_Select>;
    jbdb_Name: RestAttribute<jbdb_Family_Select>;
    jbdb_Territory: RestAttribute<jbdb_Family_Select>;
    statecode: RestAttribute<jbdb_Family_Select>;
    statuscode: RestAttribute<jbdb_Family_Select>;
  }
  interface jbdb_Family_Filter {
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
    jbdb_FamilyId: XQR.Guid;
    jbdb_Name: string;
    jbdb_Territory: XQR.EntityReferenceFilter;
    statecode: XQR.ValueContainerFilter<jbdb_family_statecode>;
    statuscode: XQR.ValueContainerFilter<jbdb_family_statuscode>;
  }
  interface jbdb_Family_Expand {
    jbdb_character_CurrentFamily_jbdb_family: RestExpand<jbdb_Family_Select, jbdb_Character_Select>;
    jbdb_family_Territory_jbdb_territory: RestExpand<jbdb_Family_Select, jbdb_Territory_Select>;
    jbdb_familyhistory_Family_jbdb_family: RestExpand<jbdb_Family_Select, jbdb_FamilyHistory_Select>;
  }
}
interface RestEntities {
  jbdb_Family: RestMapping<RestNS.jbdb_Family,RestNS.jbdb_Family_Select,RestNS.jbdb_Family_Expand,RestNS.jbdb_Family_Filter,RestNS.jbdb_FamilyResult>;
}
