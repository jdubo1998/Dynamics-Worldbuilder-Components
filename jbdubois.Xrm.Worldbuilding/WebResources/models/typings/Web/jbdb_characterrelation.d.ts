declare namespace WebNs {
  interface jbdb_CharacterRelation_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    jbdb_characterrelationid?: string | null;
    jbdb_name?: string | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: jbdb_characterrelation_statecode | null;
    statuscode?: jbdb_characterrelation_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface jbdb_CharacterRelation_Relationships {
    jbdb_CharacterFrom?: jbdb_Character_Result | null;
    jbdb_CharacterTo?: jbdb_Character_Result | null;
  }
  interface jbdb_CharacterRelation extends jbdb_CharacterRelation_Base, jbdb_CharacterRelation_Relationships {
    jbdb_CharacterFrom_bind$jbdb_characters?: string | null;
    jbdb_CharacterTo_bind$jbdb_characters?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface jbdb_CharacterRelation_Create extends jbdb_CharacterRelation {
  }
  interface jbdb_CharacterRelation_Update extends jbdb_CharacterRelation {
  }
  interface jbdb_CharacterRelation_Select {
    createdby_guid: WebAttribute<jbdb_CharacterRelation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<jbdb_CharacterRelation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<jbdb_CharacterRelation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<jbdb_CharacterRelation_Select, { importsequencenumber: number | null }, {  }>;
    jbdb_characterfrom_guid: WebAttribute<jbdb_CharacterRelation_Select, { jbdb_characterfrom_guid: string | null }, { jbdb_characterfrom_formatted?: string }>;
    jbdb_characterrelationid: WebAttribute<jbdb_CharacterRelation_Select, { jbdb_characterrelationid: string | null }, {  }>;
    jbdb_characterto_guid: WebAttribute<jbdb_CharacterRelation_Select, { jbdb_characterto_guid: string | null }, { jbdb_characterto_formatted?: string }>;
    jbdb_name: WebAttribute<jbdb_CharacterRelation_Select, { jbdb_name: string | null }, {  }>;
    modifiedby_guid: WebAttribute<jbdb_CharacterRelation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<jbdb_CharacterRelation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<jbdb_CharacterRelation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<jbdb_CharacterRelation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<jbdb_CharacterRelation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<jbdb_CharacterRelation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<jbdb_CharacterRelation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<jbdb_CharacterRelation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<jbdb_CharacterRelation_Select, { statecode: jbdb_characterrelation_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<jbdb_CharacterRelation_Select, { statuscode: jbdb_characterrelation_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<jbdb_CharacterRelation_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<jbdb_CharacterRelation_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<jbdb_CharacterRelation_Select, { versionnumber: number | null }, {  }>;
  }
  interface jbdb_CharacterRelation_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    jbdb_characterfrom_guid: XQW.Guid;
    jbdb_characterrelationid: XQW.Guid;
    jbdb_characterto_guid: XQW.Guid;
    jbdb_name: string;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: jbdb_characterrelation_statecode;
    statuscode: jbdb_characterrelation_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface jbdb_CharacterRelation_Expand {
    jbdb_CharacterFrom: WebExpand<jbdb_CharacterRelation_Expand, jbdb_Character_Select, jbdb_Character_Filter, { jbdb_CharacterFrom: jbdb_Character_Result }>;
    jbdb_CharacterTo: WebExpand<jbdb_CharacterRelation_Expand, jbdb_Character_Select, jbdb_Character_Filter, { jbdb_CharacterTo: jbdb_Character_Result }>;
  }
  interface jbdb_CharacterRelation_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    jbdb_characterfrom_formatted?: string;
    jbdb_characterto_formatted?: string;
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
  interface jbdb_CharacterRelation_Result extends jbdb_CharacterRelation_Base, jbdb_CharacterRelation_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    jbdb_characterfrom_guid: string | null;
    jbdb_characterto_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface jbdb_CharacterRelation_RelatedOne {
    jbdb_CharacterFrom: WebMappingRetrieve<WebNs.jbdb_Character_Select,WebNs.jbdb_Character_Expand,WebNs.jbdb_Character_Filter,WebNs.jbdb_Character_Fixed,WebNs.jbdb_Character_Result,WebNs.jbdb_Character_FormattedResult>;
    jbdb_CharacterTo: WebMappingRetrieve<WebNs.jbdb_Character_Select,WebNs.jbdb_Character_Expand,WebNs.jbdb_Character_Filter,WebNs.jbdb_Character_Fixed,WebNs.jbdb_Character_Result,WebNs.jbdb_Character_FormattedResult>;
  }
  interface jbdb_CharacterRelation_RelatedMany {
  }
}
interface WebEntitiesRetrieve {
  jbdb_characterrelations: WebMappingRetrieve<WebNs.jbdb_CharacterRelation_Select,WebNs.jbdb_CharacterRelation_Expand,WebNs.jbdb_CharacterRelation_Filter,WebNs.jbdb_CharacterRelation_Fixed,WebNs.jbdb_CharacterRelation_Result,WebNs.jbdb_CharacterRelation_FormattedResult>;
}
interface WebEntitiesRelated {
  jbdb_characterrelations: WebMappingRelated<WebNs.jbdb_CharacterRelation_RelatedOne,WebNs.jbdb_CharacterRelation_RelatedMany>;
}
interface WebEntitiesCUDA {
  jbdb_characterrelations: WebMappingCUDA<WebNs.jbdb_CharacterRelation_Create,WebNs.jbdb_CharacterRelation_Update,WebNs.jbdb_CharacterRelation_Select>;
}
