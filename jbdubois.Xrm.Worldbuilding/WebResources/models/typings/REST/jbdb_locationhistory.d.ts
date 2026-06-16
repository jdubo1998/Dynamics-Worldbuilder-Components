declare namespace RestNS {
  interface jbdb_LocationHistoryBase extends RestEntity {
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
    jbdb_Location?: SDK.EntityReference | null;
    jbdb_LocationHistoryId?: string | null;
    jbdb_Name?: string | null;
    jbdb_StartDate?: Date | null;
    statecode?: SDK.OptionSet<jbdb_locationhistory_statecode> | null;
    statuscode?: SDK.OptionSet<jbdb_locationhistory_statuscode> | null;
  }
  interface jbdb_LocationHistory extends jbdb_LocationHistoryBase {
    jbdb_locationhistory_Character_jbdb_character?: jbdb_Character | null;
    jbdb_locationhistory_Location_jbdb_location?: jbdb_Location | null;
  }
  interface jbdb_LocationHistoryResult extends jbdb_LocationHistoryBase {
    jbdb_locationhistory_Character_jbdb_character?: jbdb_Character | null;
    jbdb_locationhistory_Location_jbdb_location?: jbdb_Location | null;
  }
  interface jbdb_LocationHistory_Select extends jbdb_LocationHistory_Expand {
    CreatedBy: RestAttribute<jbdb_LocationHistory_Select>;
    CreatedOn: RestAttribute<jbdb_LocationHistory_Select>;
    CreatedOnBehalfBy: RestAttribute<jbdb_LocationHistory_Select>;
    ImportSequenceNumber: RestAttribute<jbdb_LocationHistory_Select>;
    ModifiedBy: RestAttribute<jbdb_LocationHistory_Select>;
    ModifiedOn: RestAttribute<jbdb_LocationHistory_Select>;
    ModifiedOnBehalfBy: RestAttribute<jbdb_LocationHistory_Select>;
    OverriddenCreatedOn: RestAttribute<jbdb_LocationHistory_Select>;
    OwnerId: RestAttribute<jbdb_LocationHistory_Select>;
    OwningBusinessUnit: RestAttribute<jbdb_LocationHistory_Select>;
    OwningTeam: RestAttribute<jbdb_LocationHistory_Select>;
    OwningUser: RestAttribute<jbdb_LocationHistory_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<jbdb_LocationHistory_Select>;
    UTCConversionTimeZoneCode: RestAttribute<jbdb_LocationHistory_Select>;
    VersionNumber: RestAttribute<jbdb_LocationHistory_Select>;
    jbdb_Character: RestAttribute<jbdb_LocationHistory_Select>;
    jbdb_Location: RestAttribute<jbdb_LocationHistory_Select>;
    jbdb_LocationHistoryId: RestAttribute<jbdb_LocationHistory_Select>;
    jbdb_Name: RestAttribute<jbdb_LocationHistory_Select>;
    jbdb_StartDate: RestAttribute<jbdb_LocationHistory_Select>;
    statecode: RestAttribute<jbdb_LocationHistory_Select>;
    statuscode: RestAttribute<jbdb_LocationHistory_Select>;
  }
  interface jbdb_LocationHistory_Filter {
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
    jbdb_Location: XQR.EntityReferenceFilter;
    jbdb_LocationHistoryId: XQR.Guid;
    jbdb_Name: string;
    jbdb_StartDate: Date;
    statecode: XQR.ValueContainerFilter<jbdb_locationhistory_statecode>;
    statuscode: XQR.ValueContainerFilter<jbdb_locationhistory_statuscode>;
  }
  interface jbdb_LocationHistory_Expand {
    jbdb_locationhistory_Character_jbdb_character: RestExpand<jbdb_LocationHistory_Select, jbdb_Character_Select>;
    jbdb_locationhistory_Location_jbdb_location: RestExpand<jbdb_LocationHistory_Select, jbdb_Location_Select>;
  }
}
interface RestEntities {
  jbdb_LocationHistory: RestMapping<RestNS.jbdb_LocationHistory,RestNS.jbdb_LocationHistory_Select,RestNS.jbdb_LocationHistory_Expand,RestNS.jbdb_LocationHistory_Filter,RestNS.jbdb_LocationHistoryResult>;
}
