declare namespace RestNS {
  interface jbdb_CharacterRelationBase extends RestEntity {
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
    jbdb_CharacterFrom?: SDK.EntityReference | null;
    jbdb_CharacterRelationId?: string | null;
    jbdb_CharacterTo?: SDK.EntityReference | null;
    jbdb_Name?: string | null;
    statecode?: SDK.OptionSet<jbdb_characterrelation_statecode> | null;
    statuscode?: SDK.OptionSet<jbdb_characterrelation_statuscode> | null;
  }
  interface jbdb_CharacterRelation extends jbdb_CharacterRelationBase {
    jbdb_characterrelation_CharacterFrom_jbdb_character?: jbdb_Character | null;
    jbdb_characterrelation_CharacterTo_jbdb_character?: jbdb_Character | null;
  }
  interface jbdb_CharacterRelationResult extends jbdb_CharacterRelationBase {
    jbdb_characterrelation_CharacterFrom_jbdb_character?: jbdb_Character | null;
    jbdb_characterrelation_CharacterTo_jbdb_character?: jbdb_Character | null;
  }
  interface jbdb_CharacterRelation_Select extends jbdb_CharacterRelation_Expand {
    CreatedBy: RestAttribute<jbdb_CharacterRelation_Select>;
    CreatedOn: RestAttribute<jbdb_CharacterRelation_Select>;
    CreatedOnBehalfBy: RestAttribute<jbdb_CharacterRelation_Select>;
    ImportSequenceNumber: RestAttribute<jbdb_CharacterRelation_Select>;
    ModifiedBy: RestAttribute<jbdb_CharacterRelation_Select>;
    ModifiedOn: RestAttribute<jbdb_CharacterRelation_Select>;
    ModifiedOnBehalfBy: RestAttribute<jbdb_CharacterRelation_Select>;
    OverriddenCreatedOn: RestAttribute<jbdb_CharacterRelation_Select>;
    OwnerId: RestAttribute<jbdb_CharacterRelation_Select>;
    OwningBusinessUnit: RestAttribute<jbdb_CharacterRelation_Select>;
    OwningTeam: RestAttribute<jbdb_CharacterRelation_Select>;
    OwningUser: RestAttribute<jbdb_CharacterRelation_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<jbdb_CharacterRelation_Select>;
    UTCConversionTimeZoneCode: RestAttribute<jbdb_CharacterRelation_Select>;
    VersionNumber: RestAttribute<jbdb_CharacterRelation_Select>;
    jbdb_CharacterFrom: RestAttribute<jbdb_CharacterRelation_Select>;
    jbdb_CharacterRelationId: RestAttribute<jbdb_CharacterRelation_Select>;
    jbdb_CharacterTo: RestAttribute<jbdb_CharacterRelation_Select>;
    jbdb_Name: RestAttribute<jbdb_CharacterRelation_Select>;
    statecode: RestAttribute<jbdb_CharacterRelation_Select>;
    statuscode: RestAttribute<jbdb_CharacterRelation_Select>;
  }
  interface jbdb_CharacterRelation_Filter {
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
    jbdb_CharacterFrom: XQR.EntityReferenceFilter;
    jbdb_CharacterRelationId: XQR.Guid;
    jbdb_CharacterTo: XQR.EntityReferenceFilter;
    jbdb_Name: string;
    statecode: XQR.ValueContainerFilter<jbdb_characterrelation_statecode>;
    statuscode: XQR.ValueContainerFilter<jbdb_characterrelation_statuscode>;
  }
  interface jbdb_CharacterRelation_Expand {
    jbdb_characterrelation_CharacterFrom_jbdb_character: RestExpand<jbdb_CharacterRelation_Select, jbdb_Character_Select>;
    jbdb_characterrelation_CharacterTo_jbdb_character: RestExpand<jbdb_CharacterRelation_Select, jbdb_Character_Select>;
  }
}
interface RestEntities {
  jbdb_CharacterRelation: RestMapping<RestNS.jbdb_CharacterRelation,RestNS.jbdb_CharacterRelation_Select,RestNS.jbdb_CharacterRelation_Expand,RestNS.jbdb_CharacterRelation_Filter,RestNS.jbdb_CharacterRelationResult>;
}
