declare namespace WebNs {
  interface jbdb_LocationHistory_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    jbdb_locationhistoryid?: string | null;
    jbdb_name?: string | null;
    jbdb_startdate?: Date | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: jbdb_locationhistory_statecode | null;
    statuscode?: jbdb_locationhistory_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface jbdb_LocationHistory_Relationships {
    jbdb_Character?: jbdb_Character_Result | null;
    jbdb_Location?: jbdb_Location_Result | null;
  }
  interface jbdb_LocationHistory extends jbdb_LocationHistory_Base, jbdb_LocationHistory_Relationships {
    jbdb_Character_bind$jbdb_characters?: string | null;
    jbdb_Location_bind$jbdb_locations?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface jbdb_LocationHistory_Create extends jbdb_LocationHistory {
  }
  interface jbdb_LocationHistory_Update extends jbdb_LocationHistory {
  }
  interface jbdb_LocationHistory_Select {
    createdby_guid: WebAttribute<jbdb_LocationHistory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<jbdb_LocationHistory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<jbdb_LocationHistory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<jbdb_LocationHistory_Select, { importsequencenumber: number | null }, {  }>;
    jbdb_character_guid: WebAttribute<jbdb_LocationHistory_Select, { jbdb_character_guid: string | null }, { jbdb_character_formatted?: string }>;
    jbdb_location_guid: WebAttribute<jbdb_LocationHistory_Select, { jbdb_location_guid: string | null }, { jbdb_location_formatted?: string }>;
    jbdb_locationhistoryid: WebAttribute<jbdb_LocationHistory_Select, { jbdb_locationhistoryid: string | null }, {  }>;
    jbdb_name: WebAttribute<jbdb_LocationHistory_Select, { jbdb_name: string | null }, {  }>;
    jbdb_startdate: WebAttribute<jbdb_LocationHistory_Select, { jbdb_startdate: Date | null }, { jbdb_startdate_formatted?: string }>;
    modifiedby_guid: WebAttribute<jbdb_LocationHistory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<jbdb_LocationHistory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<jbdb_LocationHistory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<jbdb_LocationHistory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<jbdb_LocationHistory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<jbdb_LocationHistory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<jbdb_LocationHistory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<jbdb_LocationHistory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<jbdb_LocationHistory_Select, { statecode: jbdb_locationhistory_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<jbdb_LocationHistory_Select, { statuscode: jbdb_locationhistory_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<jbdb_LocationHistory_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<jbdb_LocationHistory_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<jbdb_LocationHistory_Select, { versionnumber: number | null }, {  }>;
  }
  interface jbdb_LocationHistory_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    jbdb_character_guid: XQW.Guid;
    jbdb_location_guid: XQW.Guid;
    jbdb_locationhistoryid: XQW.Guid;
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
    statecode: jbdb_locationhistory_statecode;
    statuscode: jbdb_locationhistory_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface jbdb_LocationHistory_Expand {
    jbdb_Character: WebExpand<jbdb_LocationHistory_Expand, jbdb_Character_Select, jbdb_Character_Filter, { jbdb_Character: jbdb_Character_Result }>;
    jbdb_Location: WebExpand<jbdb_LocationHistory_Expand, jbdb_Location_Select, jbdb_Location_Filter, { jbdb_Location: jbdb_Location_Result }>;
  }
  interface jbdb_LocationHistory_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    jbdb_character_formatted?: string;
    jbdb_location_formatted?: string;
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
  interface jbdb_LocationHistory_Result extends jbdb_LocationHistory_Base, jbdb_LocationHistory_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    jbdb_character_guid: string | null;
    jbdb_location_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface jbdb_LocationHistory_RelatedOne {
    jbdb_Character: WebMappingRetrieve<WebNs.jbdb_Character_Select,WebNs.jbdb_Character_Expand,WebNs.jbdb_Character_Filter,WebNs.jbdb_Character_Fixed,WebNs.jbdb_Character_Result,WebNs.jbdb_Character_FormattedResult>;
    jbdb_Location: WebMappingRetrieve<WebNs.jbdb_Location_Select,WebNs.jbdb_Location_Expand,WebNs.jbdb_Location_Filter,WebNs.jbdb_Location_Fixed,WebNs.jbdb_Location_Result,WebNs.jbdb_Location_FormattedResult>;
  }
  interface jbdb_LocationHistory_RelatedMany {
  }
}
interface WebEntitiesRetrieve {
  jbdb_locationhistories: WebMappingRetrieve<WebNs.jbdb_LocationHistory_Select,WebNs.jbdb_LocationHistory_Expand,WebNs.jbdb_LocationHistory_Filter,WebNs.jbdb_LocationHistory_Fixed,WebNs.jbdb_LocationHistory_Result,WebNs.jbdb_LocationHistory_FormattedResult>;
}
interface WebEntitiesRelated {
  jbdb_locationhistories: WebMappingRelated<WebNs.jbdb_LocationHistory_RelatedOne,WebNs.jbdb_LocationHistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  jbdb_locationhistories: WebMappingCUDA<WebNs.jbdb_LocationHistory_Create,WebNs.jbdb_LocationHistory_Update,WebNs.jbdb_LocationHistory_Select>;
}
