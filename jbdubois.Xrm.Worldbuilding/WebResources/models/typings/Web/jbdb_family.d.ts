declare namespace WebNs {
  interface jbdb_Family_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    jbdb_familyid?: string | null;
    jbdb_name?: string | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: jbdb_family_statecode | null;
    statuscode?: jbdb_family_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface jbdb_Family_Relationships {
    jbdb_Territory?: jbdb_Territory_Result | null;
    jbdb_character_CurrentFamily_jbdb_family?: jbdb_Character_Result[] | null;
    jbdb_familyhistory_Family_jbdb_family?: jbdb_FamilyHistory_Result[] | null;
  }
  interface jbdb_Family extends jbdb_Family_Base, jbdb_Family_Relationships {
    jbdb_Territory_bind$jbdb_territories?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface jbdb_Family_Create extends jbdb_Family {
  }
  interface jbdb_Family_Update extends jbdb_Family {
  }
  interface jbdb_Family_Select {
    createdby_guid: WebAttribute<jbdb_Family_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<jbdb_Family_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<jbdb_Family_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<jbdb_Family_Select, { importsequencenumber: number | null }, {  }>;
    jbdb_familyid: WebAttribute<jbdb_Family_Select, { jbdb_familyid: string | null }, {  }>;
    jbdb_name: WebAttribute<jbdb_Family_Select, { jbdb_name: string | null }, {  }>;
    jbdb_territory_guid: WebAttribute<jbdb_Family_Select, { jbdb_territory_guid: string | null }, { jbdb_territory_formatted?: string }>;
    modifiedby_guid: WebAttribute<jbdb_Family_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<jbdb_Family_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<jbdb_Family_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<jbdb_Family_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<jbdb_Family_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<jbdb_Family_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<jbdb_Family_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<jbdb_Family_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<jbdb_Family_Select, { statecode: jbdb_family_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<jbdb_Family_Select, { statuscode: jbdb_family_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<jbdb_Family_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<jbdb_Family_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<jbdb_Family_Select, { versionnumber: number | null }, {  }>;
  }
  interface jbdb_Family_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    jbdb_familyid: XQW.Guid;
    jbdb_name: string;
    jbdb_territory_guid: XQW.Guid;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: jbdb_family_statecode;
    statuscode: jbdb_family_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface jbdb_Family_Expand {
    jbdb_Territory: WebExpand<jbdb_Family_Expand, jbdb_Territory_Select, jbdb_Territory_Filter, { jbdb_Territory: jbdb_Territory_Result }>;
    jbdb_character_CurrentFamily_jbdb_family: WebExpand<jbdb_Family_Expand, jbdb_Character_Select, jbdb_Character_Filter, { jbdb_character_CurrentFamily_jbdb_family: jbdb_Character_Result[] }>;
    jbdb_familyhistory_Family_jbdb_family: WebExpand<jbdb_Family_Expand, jbdb_FamilyHistory_Select, jbdb_FamilyHistory_Filter, { jbdb_familyhistory_Family_jbdb_family: jbdb_FamilyHistory_Result[] }>;
  }
  interface jbdb_Family_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    jbdb_territory_formatted?: string;
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
  interface jbdb_Family_Result extends jbdb_Family_Base, jbdb_Family_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    jbdb_territory_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface jbdb_Family_RelatedOne {
    jbdb_Territory: WebMappingRetrieve<WebNs.jbdb_Territory_Select,WebNs.jbdb_Territory_Expand,WebNs.jbdb_Territory_Filter,WebNs.jbdb_Territory_Fixed,WebNs.jbdb_Territory_Result,WebNs.jbdb_Territory_FormattedResult>;
  }
  interface jbdb_Family_RelatedMany {
    jbdb_character_CurrentFamily_jbdb_family: WebMappingRetrieve<WebNs.jbdb_Character_Select,WebNs.jbdb_Character_Expand,WebNs.jbdb_Character_Filter,WebNs.jbdb_Character_Fixed,WebNs.jbdb_Character_Result,WebNs.jbdb_Character_FormattedResult>;
    jbdb_familyhistory_Family_jbdb_family: WebMappingRetrieve<WebNs.jbdb_FamilyHistory_Select,WebNs.jbdb_FamilyHistory_Expand,WebNs.jbdb_FamilyHistory_Filter,WebNs.jbdb_FamilyHistory_Fixed,WebNs.jbdb_FamilyHistory_Result,WebNs.jbdb_FamilyHistory_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  jbdb_families: WebMappingRetrieve<WebNs.jbdb_Family_Select,WebNs.jbdb_Family_Expand,WebNs.jbdb_Family_Filter,WebNs.jbdb_Family_Fixed,WebNs.jbdb_Family_Result,WebNs.jbdb_Family_FormattedResult>;
}
interface WebEntitiesRelated {
  jbdb_families: WebMappingRelated<WebNs.jbdb_Family_RelatedOne,WebNs.jbdb_Family_RelatedMany>;
}
interface WebEntitiesCUDA {
  jbdb_families: WebMappingCUDA<WebNs.jbdb_Family_Create,WebNs.jbdb_Family_Update,WebNs.jbdb_Family_Select>;
}
