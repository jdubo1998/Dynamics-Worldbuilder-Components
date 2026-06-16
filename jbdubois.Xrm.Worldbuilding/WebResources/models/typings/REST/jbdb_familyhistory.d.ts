declare namespace RestNS {
  interface jbdb_FamilyHistoryBase extends RestEntity {
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
    jbdb_Character?: SDK.EntityReference | null;
    jbdb_Family?: SDK.EntityReference | null;
    jbdb_FamilyHistoryId?: string | null;
    jbdb_Name?: string | null;
    jbdb_StartDate?: Date | null;
    statecode?: SDK.OptionSet<jbdb_familyhistory_statecode> | null;
    statuscode?: SDK.OptionSet<jbdb_familyhistory_statuscode> | null;
  }
  interface jbdb_FamilyHistory extends jbdb_FamilyHistoryBase {
    jbdb_familyhistory_Character_jbdb_character?: jbdb_Character | null;
    jbdb_familyhistory_Family_jbdb_family?: jbdb_Family | null;
  }
  interface jbdb_FamilyHistoryResult extends jbdb_FamilyHistoryBase {
    jbdb_familyhistory_Character_jbdb_character?: jbdb_Character | null;
    jbdb_familyhistory_Family_jbdb_family?: jbdb_Family | null;
  }
  interface jbdb_FamilyHistory_Select extends jbdb_FamilyHistory_Expand {
    CreatedBy: RestAttribute<jbdb_FamilyHistory_Select>;
    CreatedOn: RestAttribute<jbdb_FamilyHistory_Select>;
    CreatedOnBehalfBy: RestAttribute<jbdb_FamilyHistory_Select>;
    ImportSequenceNumber: RestAttribute<jbdb_FamilyHistory_Select>;
    ModifiedBy: RestAttribute<jbdb_FamilyHistory_Select>;
    ModifiedOn: RestAttribute<jbdb_FamilyHistory_Select>;
    ModifiedOnBehalfBy: RestAttribute<jbdb_FamilyHistory_Select>;
    OverriddenCreatedOn: RestAttribute<jbdb_FamilyHistory_Select>;
    OwnerId: RestAttribute<jbdb_FamilyHistory_Select>;
    OwningBusinessUnit: RestAttribute<jbdb_FamilyHistory_Select>;
    OwningTeam: RestAttribute<jbdb_FamilyHistory_Select>;
    OwningUser: RestAttribute<jbdb_FamilyHistory_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<jbdb_FamilyHistory_Select>;
    UTCConversionTimeZoneCode: RestAttribute<jbdb_FamilyHistory_Select>;
    VersionNumber: RestAttribute<jbdb_FamilyHistory_Select>;
    jbdb_Character: RestAttribute<jbdb_FamilyHistory_Select>;
    jbdb_Family: RestAttribute<jbdb_FamilyHistory_Select>;
    jbdb_FamilyHistoryId: RestAttribute<jbdb_FamilyHistory_Select>;
    jbdb_Name: RestAttribute<jbdb_FamilyHistory_Select>;
    jbdb_StartDate: RestAttribute<jbdb_FamilyHistory_Select>;
    statecode: RestAttribute<jbdb_FamilyHistory_Select>;
    statuscode: RestAttribute<jbdb_FamilyHistory_Select>;
  }
  interface jbdb_FamilyHistory_Filter {
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
    jbdb_Character: XQR.EntityReferenceFilter;
    jbdb_Family: XQR.EntityReferenceFilter;
    jbdb_FamilyHistoryId: XQR.Guid;
    jbdb_Name: string;
    jbdb_StartDate: Date;
    statecode: XQR.ValueContainerFilter<jbdb_familyhistory_statecode>;
    statuscode: XQR.ValueContainerFilter<jbdb_familyhistory_statuscode>;
  }
  interface jbdb_FamilyHistory_Expand {
    jbdb_familyhistory_Character_jbdb_character: RestExpand<jbdb_FamilyHistory_Select, jbdb_Character_Select>;
    jbdb_familyhistory_Family_jbdb_family: RestExpand<jbdb_FamilyHistory_Select, jbdb_Family_Select>;
  }
}
interface RestEntities {
  jbdb_FamilyHistory: RestMapping<RestNS.jbdb_FamilyHistory,RestNS.jbdb_FamilyHistory_Select,RestNS.jbdb_FamilyHistory_Expand,RestNS.jbdb_FamilyHistory_Filter,RestNS.jbdb_FamilyHistoryResult>;
}
