declare namespace WebNs {
  interface jbdb_Location_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    jbdb_locationid?: string | null;
    jbdb_name?: string | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: jbdb_location_statecode | null;
    statuscode?: jbdb_location_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface jbdb_Location_Relationships {
    jbdb_Region?: jbdb_Region_Result | null;
    jbdb_Subterritory?: jbdb_Subterritory_Result | null;
    jbdb_Territory?: jbdb_Territory_Result | null;
    jbdb_character_CurrentLocation_jbdb_location?: jbdb_Character_Result[] | null;
    jbdb_locationhistory_Location_jbdb_location?: jbdb_LocationHistory_Result[] | null;
  }
  interface jbdb_Location extends jbdb_Location_Base, jbdb_Location_Relationships {
    jbdb_Region_bind$jbdb_regions?: string | null;
    jbdb_Subterritory_bind$jbdb_subterritories?: string | null;
    jbdb_Territory_bind$jbdb_territories?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface jbdb_Location_Create extends jbdb_Location {
  }
  interface jbdb_Location_Update extends jbdb_Location {
  }
  interface jbdb_Location_Select {
    createdby_guid: WebAttribute<jbdb_Location_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<jbdb_Location_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<jbdb_Location_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<jbdb_Location_Select, { importsequencenumber: number | null }, {  }>;
    jbdb_locationid: WebAttribute<jbdb_Location_Select, { jbdb_locationid: string | null }, {  }>;
    jbdb_name: WebAttribute<jbdb_Location_Select, { jbdb_name: string | null }, {  }>;
    jbdb_region_guid: WebAttribute<jbdb_Location_Select, { jbdb_region_guid: string | null }, { jbdb_region_formatted?: string }>;
    jbdb_subterritory_guid: WebAttribute<jbdb_Location_Select, { jbdb_subterritory_guid: string | null }, { jbdb_subterritory_formatted?: string }>;
    jbdb_territory_guid: WebAttribute<jbdb_Location_Select, { jbdb_territory_guid: string | null }, { jbdb_territory_formatted?: string }>;
    modifiedby_guid: WebAttribute<jbdb_Location_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<jbdb_Location_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<jbdb_Location_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<jbdb_Location_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<jbdb_Location_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<jbdb_Location_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<jbdb_Location_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<jbdb_Location_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<jbdb_Location_Select, { statecode: jbdb_location_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<jbdb_Location_Select, { statuscode: jbdb_location_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<jbdb_Location_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<jbdb_Location_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<jbdb_Location_Select, { versionnumber: number | null }, {  }>;
  }
  interface jbdb_Location_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    jbdb_locationid: XQW.Guid;
    jbdb_name: string;
    jbdb_region_guid: XQW.Guid;
    jbdb_subterritory_guid: XQW.Guid;
    jbdb_territory_guid: XQW.Guid;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: jbdb_location_statecode;
    statuscode: jbdb_location_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface jbdb_Location_Expand {
    jbdb_Region: WebExpand<jbdb_Location_Expand, jbdb_Region_Select, jbdb_Region_Filter, { jbdb_Region: jbdb_Region_Result }>;
    jbdb_Subterritory: WebExpand<jbdb_Location_Expand, jbdb_Subterritory_Select, jbdb_Subterritory_Filter, { jbdb_Subterritory: jbdb_Subterritory_Result }>;
    jbdb_Territory: WebExpand<jbdb_Location_Expand, jbdb_Territory_Select, jbdb_Territory_Filter, { jbdb_Territory: jbdb_Territory_Result }>;
    jbdb_character_CurrentLocation_jbdb_location: WebExpand<jbdb_Location_Expand, jbdb_Character_Select, jbdb_Character_Filter, { jbdb_character_CurrentLocation_jbdb_location: jbdb_Character_Result[] }>;
    jbdb_locationhistory_Location_jbdb_location: WebExpand<jbdb_Location_Expand, jbdb_LocationHistory_Select, jbdb_LocationHistory_Filter, { jbdb_locationhistory_Location_jbdb_location: jbdb_LocationHistory_Result[] }>;
  }
  interface jbdb_Location_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    jbdb_region_formatted?: string;
    jbdb_subterritory_formatted?: string;
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
  interface jbdb_Location_Result extends jbdb_Location_Base, jbdb_Location_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    jbdb_region_guid: string | null;
    jbdb_subterritory_guid: string | null;
    jbdb_territory_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface jbdb_Location_RelatedOne {
    jbdb_Region: WebMappingRetrieve<WebNs.jbdb_Region_Select,WebNs.jbdb_Region_Expand,WebNs.jbdb_Region_Filter,WebNs.jbdb_Region_Fixed,WebNs.jbdb_Region_Result,WebNs.jbdb_Region_FormattedResult>;
    jbdb_Subterritory: WebMappingRetrieve<WebNs.jbdb_Subterritory_Select,WebNs.jbdb_Subterritory_Expand,WebNs.jbdb_Subterritory_Filter,WebNs.jbdb_Subterritory_Fixed,WebNs.jbdb_Subterritory_Result,WebNs.jbdb_Subterritory_FormattedResult>;
    jbdb_Territory: WebMappingRetrieve<WebNs.jbdb_Territory_Select,WebNs.jbdb_Territory_Expand,WebNs.jbdb_Territory_Filter,WebNs.jbdb_Territory_Fixed,WebNs.jbdb_Territory_Result,WebNs.jbdb_Territory_FormattedResult>;
  }
  interface jbdb_Location_RelatedMany {
    jbdb_character_CurrentLocation_jbdb_location: WebMappingRetrieve<WebNs.jbdb_Character_Select,WebNs.jbdb_Character_Expand,WebNs.jbdb_Character_Filter,WebNs.jbdb_Character_Fixed,WebNs.jbdb_Character_Result,WebNs.jbdb_Character_FormattedResult>;
    jbdb_locationhistory_Location_jbdb_location: WebMappingRetrieve<WebNs.jbdb_LocationHistory_Select,WebNs.jbdb_LocationHistory_Expand,WebNs.jbdb_LocationHistory_Filter,WebNs.jbdb_LocationHistory_Fixed,WebNs.jbdb_LocationHistory_Result,WebNs.jbdb_LocationHistory_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  jbdb_locations: WebMappingRetrieve<WebNs.jbdb_Location_Select,WebNs.jbdb_Location_Expand,WebNs.jbdb_Location_Filter,WebNs.jbdb_Location_Fixed,WebNs.jbdb_Location_Result,WebNs.jbdb_Location_FormattedResult>;
}
interface WebEntitiesRelated {
  jbdb_locations: WebMappingRelated<WebNs.jbdb_Location_RelatedOne,WebNs.jbdb_Location_RelatedMany>;
}
interface WebEntitiesCUDA {
  jbdb_locations: WebMappingCUDA<WebNs.jbdb_Location_Create,WebNs.jbdb_Location_Update,WebNs.jbdb_Location_Select>;
}
