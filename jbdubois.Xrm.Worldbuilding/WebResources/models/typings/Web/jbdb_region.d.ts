declare namespace WebNs {
  interface jbdb_Region_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    jbdb_name?: string | null;
    jbdb_regionid?: string | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: jbdb_region_statecode | null;
    statuscode?: jbdb_region_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface jbdb_Region_Relationships {
    jbdb_location_Region_jbdb_region?: jbdb_Location_Result[] | null;
    jbdb_territory_Region_jbdb_region?: jbdb_Territory_Result[] | null;
  }
  interface jbdb_Region extends jbdb_Region_Base, jbdb_Region_Relationships {
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface jbdb_Region_Create extends jbdb_Region {
  }
  interface jbdb_Region_Update extends jbdb_Region {
  }
  interface jbdb_Region_Select {
    createdby_guid: WebAttribute<jbdb_Region_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<jbdb_Region_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<jbdb_Region_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<jbdb_Region_Select, { importsequencenumber: number | null }, {  }>;
    jbdb_name: WebAttribute<jbdb_Region_Select, { jbdb_name: string | null }, {  }>;
    jbdb_regionid: WebAttribute<jbdb_Region_Select, { jbdb_regionid: string | null }, {  }>;
    modifiedby_guid: WebAttribute<jbdb_Region_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<jbdb_Region_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<jbdb_Region_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<jbdb_Region_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<jbdb_Region_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<jbdb_Region_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<jbdb_Region_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<jbdb_Region_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<jbdb_Region_Select, { statecode: jbdb_region_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<jbdb_Region_Select, { statuscode: jbdb_region_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<jbdb_Region_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<jbdb_Region_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<jbdb_Region_Select, { versionnumber: number | null }, {  }>;
  }
  interface jbdb_Region_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    jbdb_name: string;
    jbdb_regionid: XQW.Guid;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: jbdb_region_statecode;
    statuscode: jbdb_region_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface jbdb_Region_Expand {
    jbdb_location_Region_jbdb_region: WebExpand<jbdb_Region_Expand, jbdb_Location_Select, jbdb_Location_Filter, { jbdb_location_Region_jbdb_region: jbdb_Location_Result[] }>;
    jbdb_territory_Region_jbdb_region: WebExpand<jbdb_Region_Expand, jbdb_Territory_Select, jbdb_Territory_Filter, { jbdb_territory_Region_jbdb_region: jbdb_Territory_Result[] }>;
  }
  interface jbdb_Region_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
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
  interface jbdb_Region_Result extends jbdb_Region_Base, jbdb_Region_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface jbdb_Region_RelatedOne {
  }
  interface jbdb_Region_RelatedMany {
    jbdb_location_Region_jbdb_region: WebMappingRetrieve<WebNs.jbdb_Location_Select,WebNs.jbdb_Location_Expand,WebNs.jbdb_Location_Filter,WebNs.jbdb_Location_Fixed,WebNs.jbdb_Location_Result,WebNs.jbdb_Location_FormattedResult>;
    jbdb_territory_Region_jbdb_region: WebMappingRetrieve<WebNs.jbdb_Territory_Select,WebNs.jbdb_Territory_Expand,WebNs.jbdb_Territory_Filter,WebNs.jbdb_Territory_Fixed,WebNs.jbdb_Territory_Result,WebNs.jbdb_Territory_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  jbdb_regions: WebMappingRetrieve<WebNs.jbdb_Region_Select,WebNs.jbdb_Region_Expand,WebNs.jbdb_Region_Filter,WebNs.jbdb_Region_Fixed,WebNs.jbdb_Region_Result,WebNs.jbdb_Region_FormattedResult>;
}
interface WebEntitiesRelated {
  jbdb_regions: WebMappingRelated<WebNs.jbdb_Region_RelatedOne,WebNs.jbdb_Region_RelatedMany>;
}
interface WebEntitiesCUDA {
  jbdb_regions: WebMappingCUDA<WebNs.jbdb_Region_Create,WebNs.jbdb_Region_Update,WebNs.jbdb_Region_Select>;
}
