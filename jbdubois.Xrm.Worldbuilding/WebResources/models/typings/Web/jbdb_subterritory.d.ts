declare namespace WebNs {
  interface jbdb_Subterritory_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    jbdb_name?: string | null;
    jbdb_subterritoryid?: string | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: jbdb_subterritory_statecode | null;
    statuscode?: jbdb_subterritory_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface jbdb_Subterritory_Relationships {
    jbdb_Territory?: jbdb_Territory_Result | null;
    jbdb_character_CurrentSubterritory_jbdb_subterritory?: jbdb_Character_Result[] | null;
    jbdb_family_SubterritoryId_jbdb_subterritory?: jbdb_Family_Result[] | null;
    jbdb_location_Subterritory_jbdb_subterritory?: jbdb_Location_Result[] | null;
  }
  interface jbdb_Subterritory extends jbdb_Subterritory_Base, jbdb_Subterritory_Relationships {
    jbdb_Territory_bind$jbdb_territories?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface jbdb_Subterritory_Create extends jbdb_Subterritory {
  }
  interface jbdb_Subterritory_Update extends jbdb_Subterritory {
  }
  interface jbdb_Subterritory_Select {
    createdby_guid: WebAttribute<jbdb_Subterritory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<jbdb_Subterritory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<jbdb_Subterritory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<jbdb_Subterritory_Select, { importsequencenumber: number | null }, {  }>;
    jbdb_name: WebAttribute<jbdb_Subterritory_Select, { jbdb_name: string | null }, {  }>;
    jbdb_subterritoryid: WebAttribute<jbdb_Subterritory_Select, { jbdb_subterritoryid: string | null }, {  }>;
    jbdb_territory_guid: WebAttribute<jbdb_Subterritory_Select, { jbdb_territory_guid: string | null }, { jbdb_territory_formatted?: string }>;
    modifiedby_guid: WebAttribute<jbdb_Subterritory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<jbdb_Subterritory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<jbdb_Subterritory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<jbdb_Subterritory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<jbdb_Subterritory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<jbdb_Subterritory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<jbdb_Subterritory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<jbdb_Subterritory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<jbdb_Subterritory_Select, { statecode: jbdb_subterritory_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<jbdb_Subterritory_Select, { statuscode: jbdb_subterritory_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<jbdb_Subterritory_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<jbdb_Subterritory_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<jbdb_Subterritory_Select, { versionnumber: number | null }, {  }>;
  }
  interface jbdb_Subterritory_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    jbdb_name: string;
    jbdb_subterritoryid: XQW.Guid;
    jbdb_territory_guid: XQW.Guid;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: jbdb_subterritory_statecode;
    statuscode: jbdb_subterritory_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface jbdb_Subterritory_Expand {
    jbdb_Territory: WebExpand<jbdb_Subterritory_Expand, jbdb_Territory_Select, jbdb_Territory_Filter, { jbdb_Territory: jbdb_Territory_Result }>;
    jbdb_character_CurrentSubterritory_jbdb_subterritory: WebExpand<jbdb_Subterritory_Expand, jbdb_Character_Select, jbdb_Character_Filter, { jbdb_character_CurrentSubterritory_jbdb_subterritory: jbdb_Character_Result[] }>;
    jbdb_family_SubterritoryId_jbdb_subterritory: WebExpand<jbdb_Subterritory_Expand, jbdb_Family_Select, jbdb_Family_Filter, { jbdb_family_SubterritoryId_jbdb_subterritory: jbdb_Family_Result[] }>;
    jbdb_location_Subterritory_jbdb_subterritory: WebExpand<jbdb_Subterritory_Expand, jbdb_Location_Select, jbdb_Location_Filter, { jbdb_location_Subterritory_jbdb_subterritory: jbdb_Location_Result[] }>;
  }
  interface jbdb_Subterritory_FormattedResult {
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
  interface jbdb_Subterritory_Result extends jbdb_Subterritory_Base, jbdb_Subterritory_Relationships {
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
  interface jbdb_Subterritory_RelatedOne {
    jbdb_Territory: WebMappingRetrieve<WebNs.jbdb_Territory_Select,WebNs.jbdb_Territory_Expand,WebNs.jbdb_Territory_Filter,WebNs.jbdb_Territory_Fixed,WebNs.jbdb_Territory_Result,WebNs.jbdb_Territory_FormattedResult>;
  }
  interface jbdb_Subterritory_RelatedMany {
    jbdb_character_CurrentSubterritory_jbdb_subterritory: WebMappingRetrieve<WebNs.jbdb_Character_Select,WebNs.jbdb_Character_Expand,WebNs.jbdb_Character_Filter,WebNs.jbdb_Character_Fixed,WebNs.jbdb_Character_Result,WebNs.jbdb_Character_FormattedResult>;
    jbdb_family_SubterritoryId_jbdb_subterritory: WebMappingRetrieve<WebNs.jbdb_Family_Select,WebNs.jbdb_Family_Expand,WebNs.jbdb_Family_Filter,WebNs.jbdb_Family_Fixed,WebNs.jbdb_Family_Result,WebNs.jbdb_Family_FormattedResult>;
    jbdb_location_Subterritory_jbdb_subterritory: WebMappingRetrieve<WebNs.jbdb_Location_Select,WebNs.jbdb_Location_Expand,WebNs.jbdb_Location_Filter,WebNs.jbdb_Location_Fixed,WebNs.jbdb_Location_Result,WebNs.jbdb_Location_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  jbdb_subterritories: WebMappingRetrieve<WebNs.jbdb_Subterritory_Select,WebNs.jbdb_Subterritory_Expand,WebNs.jbdb_Subterritory_Filter,WebNs.jbdb_Subterritory_Fixed,WebNs.jbdb_Subterritory_Result,WebNs.jbdb_Subterritory_FormattedResult>;
}
interface WebEntitiesRelated {
  jbdb_subterritories: WebMappingRelated<WebNs.jbdb_Subterritory_RelatedOne,WebNs.jbdb_Subterritory_RelatedMany>;
}
interface WebEntitiesCUDA {
  jbdb_subterritories: WebMappingCUDA<WebNs.jbdb_Subterritory_Create,WebNs.jbdb_Subterritory_Update,WebNs.jbdb_Subterritory_Select>;
}
