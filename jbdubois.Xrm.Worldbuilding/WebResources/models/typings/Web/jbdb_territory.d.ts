declare namespace WebNs {
  interface jbdb_Territory_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    jbdb_name?: string | null;
    jbdb_territoryid?: string | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: jbdb_territory_statecode | null;
    statuscode?: jbdb_territory_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface jbdb_Territory_Relationships {
    jbdb_Region?: jbdb_Region_Result | null;
    jbdb_character_CurrentTerritory_jbdb_territory?: jbdb_Character_Result[] | null;
    jbdb_family_Territory_jbdb_territory?: jbdb_Family_Result[] | null;
    jbdb_location_Territory_jbdb_territory?: jbdb_Location_Result[] | null;
    jbdb_subterritory_Territory_jbdb_territory?: jbdb_Subterritory_Result[] | null;
  }
  interface jbdb_Territory extends jbdb_Territory_Base, jbdb_Territory_Relationships {
    jbdb_Region_bind$jbdb_regions?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface jbdb_Territory_Create extends jbdb_Territory {
  }
  interface jbdb_Territory_Update extends jbdb_Territory {
  }
  interface jbdb_Territory_Select {
    createdby_guid: WebAttribute<jbdb_Territory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<jbdb_Territory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<jbdb_Territory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<jbdb_Territory_Select, { importsequencenumber: number | null }, {  }>;
    jbdb_name: WebAttribute<jbdb_Territory_Select, { jbdb_name: string | null }, {  }>;
    jbdb_region_guid: WebAttribute<jbdb_Territory_Select, { jbdb_region_guid: string | null }, { jbdb_region_formatted?: string }>;
    jbdb_territoryid: WebAttribute<jbdb_Territory_Select, { jbdb_territoryid: string | null }, {  }>;
    modifiedby_guid: WebAttribute<jbdb_Territory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<jbdb_Territory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<jbdb_Territory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<jbdb_Territory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<jbdb_Territory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<jbdb_Territory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<jbdb_Territory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<jbdb_Territory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<jbdb_Territory_Select, { statecode: jbdb_territory_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<jbdb_Territory_Select, { statuscode: jbdb_territory_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<jbdb_Territory_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<jbdb_Territory_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<jbdb_Territory_Select, { versionnumber: number | null }, {  }>;
  }
  interface jbdb_Territory_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    jbdb_name: string;
    jbdb_region_guid: XQW.Guid;
    jbdb_territoryid: XQW.Guid;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: jbdb_territory_statecode;
    statuscode: jbdb_territory_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface jbdb_Territory_Expand {
    jbdb_Region: WebExpand<jbdb_Territory_Expand, jbdb_Region_Select, jbdb_Region_Filter, { jbdb_Region: jbdb_Region_Result }>;
    jbdb_character_CurrentTerritory_jbdb_territory: WebExpand<jbdb_Territory_Expand, jbdb_Character_Select, jbdb_Character_Filter, { jbdb_character_CurrentTerritory_jbdb_territory: jbdb_Character_Result[] }>;
    jbdb_family_Territory_jbdb_territory: WebExpand<jbdb_Territory_Expand, jbdb_Family_Select, jbdb_Family_Filter, { jbdb_family_Territory_jbdb_territory: jbdb_Family_Result[] }>;
    jbdb_location_Territory_jbdb_territory: WebExpand<jbdb_Territory_Expand, jbdb_Location_Select, jbdb_Location_Filter, { jbdb_location_Territory_jbdb_territory: jbdb_Location_Result[] }>;
    jbdb_subterritory_Territory_jbdb_territory: WebExpand<jbdb_Territory_Expand, jbdb_Subterritory_Select, jbdb_Subterritory_Filter, { jbdb_subterritory_Territory_jbdb_territory: jbdb_Subterritory_Result[] }>;
  }
  interface jbdb_Territory_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    jbdb_region_formatted?: string;
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
  interface jbdb_Territory_Result extends jbdb_Territory_Base, jbdb_Territory_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    jbdb_region_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface jbdb_Territory_RelatedOne {
    jbdb_Region: WebMappingRetrieve<WebNs.jbdb_Region_Select,WebNs.jbdb_Region_Expand,WebNs.jbdb_Region_Filter,WebNs.jbdb_Region_Fixed,WebNs.jbdb_Region_Result,WebNs.jbdb_Region_FormattedResult>;
  }
  interface jbdb_Territory_RelatedMany {
    jbdb_character_CurrentTerritory_jbdb_territory: WebMappingRetrieve<WebNs.jbdb_Character_Select,WebNs.jbdb_Character_Expand,WebNs.jbdb_Character_Filter,WebNs.jbdb_Character_Fixed,WebNs.jbdb_Character_Result,WebNs.jbdb_Character_FormattedResult>;
    jbdb_family_Territory_jbdb_territory: WebMappingRetrieve<WebNs.jbdb_Family_Select,WebNs.jbdb_Family_Expand,WebNs.jbdb_Family_Filter,WebNs.jbdb_Family_Fixed,WebNs.jbdb_Family_Result,WebNs.jbdb_Family_FormattedResult>;
    jbdb_location_Territory_jbdb_territory: WebMappingRetrieve<WebNs.jbdb_Location_Select,WebNs.jbdb_Location_Expand,WebNs.jbdb_Location_Filter,WebNs.jbdb_Location_Fixed,WebNs.jbdb_Location_Result,WebNs.jbdb_Location_FormattedResult>;
    jbdb_subterritory_Territory_jbdb_territory: WebMappingRetrieve<WebNs.jbdb_Subterritory_Select,WebNs.jbdb_Subterritory_Expand,WebNs.jbdb_Subterritory_Filter,WebNs.jbdb_Subterritory_Fixed,WebNs.jbdb_Subterritory_Result,WebNs.jbdb_Subterritory_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  jbdb_territories: WebMappingRetrieve<WebNs.jbdb_Territory_Select,WebNs.jbdb_Territory_Expand,WebNs.jbdb_Territory_Filter,WebNs.jbdb_Territory_Fixed,WebNs.jbdb_Territory_Result,WebNs.jbdb_Territory_FormattedResult>;
}
interface WebEntitiesRelated {
  jbdb_territories: WebMappingRelated<WebNs.jbdb_Territory_RelatedOne,WebNs.jbdb_Territory_RelatedMany>;
}
interface WebEntitiesCUDA {
  jbdb_territories: WebMappingCUDA<WebNs.jbdb_Territory_Create,WebNs.jbdb_Territory_Update,WebNs.jbdb_Territory_Select>;
}
