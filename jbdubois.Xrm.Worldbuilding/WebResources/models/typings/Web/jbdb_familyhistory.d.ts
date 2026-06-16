declare namespace WebNs {
  interface jbdb_FamilyHistory_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    jbdb_familyhistoryid?: string | null;
    jbdb_name?: string | null;
    jbdb_startdate?: Date | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: jbdb_familyhistory_statecode | null;
    statuscode?: jbdb_familyhistory_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface jbdb_FamilyHistory_Relationships {
    jbdb_Character?: jbdb_Character_Result | null;
    jbdb_Family?: jbdb_Family_Result | null;
  }
  interface jbdb_FamilyHistory extends jbdb_FamilyHistory_Base, jbdb_FamilyHistory_Relationships {
    jbdb_Character_bind$jbdb_characters?: string | null;
    jbdb_Family_bind$jbdb_families?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface jbdb_FamilyHistory_Create extends jbdb_FamilyHistory {
  }
  interface jbdb_FamilyHistory_Update extends jbdb_FamilyHistory {
  }
  interface jbdb_FamilyHistory_Select {
    createdby_guid: WebAttribute<jbdb_FamilyHistory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<jbdb_FamilyHistory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<jbdb_FamilyHistory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<jbdb_FamilyHistory_Select, { importsequencenumber: number | null }, {  }>;
    jbdb_character_guid: WebAttribute<jbdb_FamilyHistory_Select, { jbdb_character_guid: string | null }, { jbdb_character_formatted?: string }>;
    jbdb_family_guid: WebAttribute<jbdb_FamilyHistory_Select, { jbdb_family_guid: string | null }, { jbdb_family_formatted?: string }>;
    jbdb_familyhistoryid: WebAttribute<jbdb_FamilyHistory_Select, { jbdb_familyhistoryid: string | null }, {  }>;
    jbdb_name: WebAttribute<jbdb_FamilyHistory_Select, { jbdb_name: string | null }, {  }>;
    jbdb_startdate: WebAttribute<jbdb_FamilyHistory_Select, { jbdb_startdate: Date | null }, { jbdb_startdate_formatted?: string }>;
    modifiedby_guid: WebAttribute<jbdb_FamilyHistory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<jbdb_FamilyHistory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<jbdb_FamilyHistory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<jbdb_FamilyHistory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<jbdb_FamilyHistory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<jbdb_FamilyHistory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<jbdb_FamilyHistory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<jbdb_FamilyHistory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<jbdb_FamilyHistory_Select, { statecode: jbdb_familyhistory_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<jbdb_FamilyHistory_Select, { statuscode: jbdb_familyhistory_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<jbdb_FamilyHistory_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<jbdb_FamilyHistory_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<jbdb_FamilyHistory_Select, { versionnumber: number | null }, {  }>;
  }
  interface jbdb_FamilyHistory_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    jbdb_character_guid: XQW.Guid;
    jbdb_family_guid: XQW.Guid;
    jbdb_familyhistoryid: XQW.Guid;
    jbdb_name: string;
    jbdb_startdate: Date;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: jbdb_familyhistory_statecode;
    statuscode: jbdb_familyhistory_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface jbdb_FamilyHistory_Expand {
    jbdb_Character: WebExpand<jbdb_FamilyHistory_Expand, jbdb_Character_Select, jbdb_Character_Filter, { jbdb_Character: jbdb_Character_Result }>;
    jbdb_Family: WebExpand<jbdb_FamilyHistory_Expand, jbdb_Family_Select, jbdb_Family_Filter, { jbdb_Family: jbdb_Family_Result }>;
  }
  interface jbdb_FamilyHistory_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    jbdb_character_formatted?: string;
    jbdb_family_formatted?: string;
    jbdb_startdate_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
  }
  interface jbdb_FamilyHistory_Result extends jbdb_FamilyHistory_Base, jbdb_FamilyHistory_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    jbdb_character_guid: string | null;
    jbdb_family_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface jbdb_FamilyHistory_RelatedOne {
    jbdb_Character: WebMappingRetrieve<WebNs.jbdb_Character_Select,WebNs.jbdb_Character_Expand,WebNs.jbdb_Character_Filter,WebNs.jbdb_Character_Fixed,WebNs.jbdb_Character_Result,WebNs.jbdb_Character_FormattedResult>;
    jbdb_Family: WebMappingRetrieve<WebNs.jbdb_Family_Select,WebNs.jbdb_Family_Expand,WebNs.jbdb_Family_Filter,WebNs.jbdb_Family_Fixed,WebNs.jbdb_Family_Result,WebNs.jbdb_Family_FormattedResult>;
  }
  interface jbdb_FamilyHistory_RelatedMany {
  }
}
interface WebEntitiesRetrieve {
  jbdb_familyhistories: WebMappingRetrieve<WebNs.jbdb_FamilyHistory_Select,WebNs.jbdb_FamilyHistory_Expand,WebNs.jbdb_FamilyHistory_Filter,WebNs.jbdb_FamilyHistory_Fixed,WebNs.jbdb_FamilyHistory_Result,WebNs.jbdb_FamilyHistory_FormattedResult>;
}
interface WebEntitiesRelated {
  jbdb_familyhistories: WebMappingRelated<WebNs.jbdb_FamilyHistory_RelatedOne,WebNs.jbdb_FamilyHistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  jbdb_familyhistories: WebMappingCUDA<WebNs.jbdb_FamilyHistory_Create,WebNs.jbdb_FamilyHistory_Update,WebNs.jbdb_FamilyHistory_Select>;
}
