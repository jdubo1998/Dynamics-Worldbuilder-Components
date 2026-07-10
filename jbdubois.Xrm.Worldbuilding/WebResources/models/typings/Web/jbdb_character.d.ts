declare namespace WebNs {
  interface jbdb_Character_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    jbdb_age?: Date | null;
    jbdb_birthdate?: Date | null;
    jbdb_birthyear?: number | null;
    jbdb_characterid?: string | null;
    jbdb_firstname?: string | null;
    jbdb_heightininches?: number | null;
    jbdb_heroforgecreationstage?: jbdb_character_jbdb_heroforgecreationstage | null;
    jbdb_heroforgeurl?: string | null;
    jbdb_infamilytree?: boolean | null;
    jbdb_inspiration?: string | null;
    jbdb_isheroforgecomplete?: boolean | null;
    jbdb_lorecreationstage?: jbdb_generalcreativecreationstages | null;
    jbdb_name?: string | null;
    jbdb_title?: string | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: jbdb_character_statecode | null;
    statuscode?: jbdb_character_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface jbdb_Character_Relationships {
    jbdb_CurrentFamily?: jbdb_Family_Result | null;
    jbdb_CurrentLocation?: jbdb_Location_Result | null;
    jbdb_CurrentSubterritory?: jbdb_Subterritory_Result | null;
    jbdb_CurrentTerritory?: jbdb_Territory_Result | null;
    jbdb_characterrelation_CharacterFrom_jbdb_character?: jbdb_CharacterRelation_Result[] | null;
    jbdb_characterrelation_CharacterTo_jbdb_character?: jbdb_CharacterRelation_Result[] | null;
    jbdb_familyhistory_Character_jbdb_character?: jbdb_FamilyHistory_Result[] | null;
    jbdb_locationhistory_Character_jbdb_character?: jbdb_LocationHistory_Result[] | null;
  }
  interface jbdb_Character extends jbdb_Character_Base, jbdb_Character_Relationships {
    jbdb_CurrentFamily_bind$jbdb_families?: string | null;
    jbdb_CurrentLocation_bind$jbdb_locations?: string | null;
    jbdb_CurrentSubterritory_bind$jbdb_subterritories?: string | null;
    jbdb_CurrentTerritory_bind$jbdb_territories?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface jbdb_Character_Create extends jbdb_Character {
  }
  interface jbdb_Character_Update extends jbdb_Character {
  }
  interface jbdb_Character_Select {
    createdby_guid: WebAttribute<jbdb_Character_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<jbdb_Character_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<jbdb_Character_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<jbdb_Character_Select, { importsequencenumber: number | null }, {  }>;
    jbdb_age: WebAttribute<jbdb_Character_Select, { jbdb_age: Date | null }, { jbdb_age_formatted?: string }>;
    jbdb_birthdate: WebAttribute<jbdb_Character_Select, { jbdb_birthdate: Date | null }, { jbdb_birthdate_formatted?: string }>;
    jbdb_birthyear: WebAttribute<jbdb_Character_Select, { jbdb_birthyear: number | null }, {  }>;
    jbdb_characterid: WebAttribute<jbdb_Character_Select, { jbdb_characterid: string | null }, {  }>;
    jbdb_currentfamily_guid: WebAttribute<jbdb_Character_Select, { jbdb_currentfamily_guid: string | null }, { jbdb_currentfamily_formatted?: string }>;
    jbdb_currentlocation_guid: WebAttribute<jbdb_Character_Select, { jbdb_currentlocation_guid: string | null }, { jbdb_currentlocation_formatted?: string }>;
    jbdb_currentsubterritory_guid: WebAttribute<jbdb_Character_Select, { jbdb_currentsubterritory_guid: string | null }, { jbdb_currentsubterritory_formatted?: string }>;
    jbdb_currentterritory_guid: WebAttribute<jbdb_Character_Select, { jbdb_currentterritory_guid: string | null }, { jbdb_currentterritory_formatted?: string }>;
    jbdb_firstname: WebAttribute<jbdb_Character_Select, { jbdb_firstname: string | null }, {  }>;
    jbdb_heightininches: WebAttribute<jbdb_Character_Select, { jbdb_heightininches: number | null }, {  }>;
    jbdb_heroforgecreationstage: WebAttribute<jbdb_Character_Select, { jbdb_heroforgecreationstage: jbdb_character_jbdb_heroforgecreationstage | null }, { jbdb_heroforgecreationstage_formatted?: string }>;
    jbdb_heroforgeurl: WebAttribute<jbdb_Character_Select, { jbdb_heroforgeurl: string | null }, {  }>;
    jbdb_infamilytree: WebAttribute<jbdb_Character_Select, { jbdb_infamilytree: boolean | null }, {  }>;
    jbdb_inspiration: WebAttribute<jbdb_Character_Select, { jbdb_inspiration: string | null }, {  }>;
    jbdb_isheroforgecomplete: WebAttribute<jbdb_Character_Select, { jbdb_isheroforgecomplete: boolean | null }, {  }>;
    jbdb_lorecreationstage: WebAttribute<jbdb_Character_Select, { jbdb_lorecreationstage: jbdb_generalcreativecreationstages | null }, { jbdb_lorecreationstage_formatted?: string }>;
    jbdb_name: WebAttribute<jbdb_Character_Select, { jbdb_name: string | null }, {  }>;
    jbdb_title: WebAttribute<jbdb_Character_Select, { jbdb_title: string | null }, {  }>;
    modifiedby_guid: WebAttribute<jbdb_Character_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<jbdb_Character_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<jbdb_Character_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<jbdb_Character_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<jbdb_Character_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<jbdb_Character_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<jbdb_Character_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<jbdb_Character_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<jbdb_Character_Select, { statecode: jbdb_character_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<jbdb_Character_Select, { statuscode: jbdb_character_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<jbdb_Character_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<jbdb_Character_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<jbdb_Character_Select, { versionnumber: number | null }, {  }>;
  }
  interface jbdb_Character_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    jbdb_age: Date;
    jbdb_birthdate: Date;
    jbdb_birthyear: number;
    jbdb_characterid: XQW.Guid;
    jbdb_currentfamily_guid: XQW.Guid;
    jbdb_currentlocation_guid: XQW.Guid;
    jbdb_currentsubterritory_guid: XQW.Guid;
    jbdb_currentterritory_guid: XQW.Guid;
    jbdb_firstname: string;
    jbdb_heightininches: number;
    jbdb_heroforgecreationstage: jbdb_character_jbdb_heroforgecreationstage;
    jbdb_heroforgeurl: string;
    jbdb_infamilytree: boolean;
    jbdb_inspiration: string;
    jbdb_isheroforgecomplete: boolean;
    jbdb_lorecreationstage: jbdb_generalcreativecreationstages;
    jbdb_name: string;
    jbdb_title: string;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: jbdb_character_statecode;
    statuscode: jbdb_character_statuscode;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface jbdb_Character_Expand {
    jbdb_CurrentFamily: WebExpand<jbdb_Character_Expand, jbdb_Family_Select, jbdb_Family_Filter, { jbdb_CurrentFamily: jbdb_Family_Result }>;
    jbdb_CurrentLocation: WebExpand<jbdb_Character_Expand, jbdb_Location_Select, jbdb_Location_Filter, { jbdb_CurrentLocation: jbdb_Location_Result }>;
    jbdb_CurrentSubterritory: WebExpand<jbdb_Character_Expand, jbdb_Subterritory_Select, jbdb_Subterritory_Filter, { jbdb_CurrentSubterritory: jbdb_Subterritory_Result }>;
    jbdb_CurrentTerritory: WebExpand<jbdb_Character_Expand, jbdb_Territory_Select, jbdb_Territory_Filter, { jbdb_CurrentTerritory: jbdb_Territory_Result }>;
    jbdb_characterrelation_CharacterFrom_jbdb_character: WebExpand<jbdb_Character_Expand, jbdb_CharacterRelation_Select, jbdb_CharacterRelation_Filter, { jbdb_characterrelation_CharacterFrom_jbdb_character: jbdb_CharacterRelation_Result[] }>;
    jbdb_characterrelation_CharacterTo_jbdb_character: WebExpand<jbdb_Character_Expand, jbdb_CharacterRelation_Select, jbdb_CharacterRelation_Filter, { jbdb_characterrelation_CharacterTo_jbdb_character: jbdb_CharacterRelation_Result[] }>;
    jbdb_familyhistory_Character_jbdb_character: WebExpand<jbdb_Character_Expand, jbdb_FamilyHistory_Select, jbdb_FamilyHistory_Filter, { jbdb_familyhistory_Character_jbdb_character: jbdb_FamilyHistory_Result[] }>;
    jbdb_locationhistory_Character_jbdb_character: WebExpand<jbdb_Character_Expand, jbdb_LocationHistory_Select, jbdb_LocationHistory_Filter, { jbdb_locationhistory_Character_jbdb_character: jbdb_LocationHistory_Result[] }>;
  }
  interface jbdb_Character_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    jbdb_age_formatted?: string;
    jbdb_birthdate_formatted?: string;
    jbdb_currentfamily_formatted?: string;
    jbdb_currentlocation_formatted?: string;
    jbdb_currentsubterritory_formatted?: string;
    jbdb_currentterritory_formatted?: string;
    jbdb_heroforgecreationstage_formatted?: string;
    jbdb_lorecreationstage_formatted?: string;
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
  interface jbdb_Character_Result extends jbdb_Character_Base, jbdb_Character_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    jbdb_currentfamily_guid: string | null;
    jbdb_currentlocation_guid: string | null;
    jbdb_currentsubterritory_guid: string | null;
    jbdb_currentterritory_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
  }
  interface jbdb_Character_RelatedOne {
    jbdb_CurrentFamily: WebMappingRetrieve<WebNs.jbdb_Family_Select,WebNs.jbdb_Family_Expand,WebNs.jbdb_Family_Filter,WebNs.jbdb_Family_Fixed,WebNs.jbdb_Family_Result,WebNs.jbdb_Family_FormattedResult>;
    jbdb_CurrentLocation: WebMappingRetrieve<WebNs.jbdb_Location_Select,WebNs.jbdb_Location_Expand,WebNs.jbdb_Location_Filter,WebNs.jbdb_Location_Fixed,WebNs.jbdb_Location_Result,WebNs.jbdb_Location_FormattedResult>;
    jbdb_CurrentSubterritory: WebMappingRetrieve<WebNs.jbdb_Subterritory_Select,WebNs.jbdb_Subterritory_Expand,WebNs.jbdb_Subterritory_Filter,WebNs.jbdb_Subterritory_Fixed,WebNs.jbdb_Subterritory_Result,WebNs.jbdb_Subterritory_FormattedResult>;
    jbdb_CurrentTerritory: WebMappingRetrieve<WebNs.jbdb_Territory_Select,WebNs.jbdb_Territory_Expand,WebNs.jbdb_Territory_Filter,WebNs.jbdb_Territory_Fixed,WebNs.jbdb_Territory_Result,WebNs.jbdb_Territory_FormattedResult>;
  }
  interface jbdb_Character_RelatedMany {
    jbdb_characterrelation_CharacterFrom_jbdb_character: WebMappingRetrieve<WebNs.jbdb_CharacterRelation_Select,WebNs.jbdb_CharacterRelation_Expand,WebNs.jbdb_CharacterRelation_Filter,WebNs.jbdb_CharacterRelation_Fixed,WebNs.jbdb_CharacterRelation_Result,WebNs.jbdb_CharacterRelation_FormattedResult>;
    jbdb_characterrelation_CharacterTo_jbdb_character: WebMappingRetrieve<WebNs.jbdb_CharacterRelation_Select,WebNs.jbdb_CharacterRelation_Expand,WebNs.jbdb_CharacterRelation_Filter,WebNs.jbdb_CharacterRelation_Fixed,WebNs.jbdb_CharacterRelation_Result,WebNs.jbdb_CharacterRelation_FormattedResult>;
    jbdb_familyhistory_Character_jbdb_character: WebMappingRetrieve<WebNs.jbdb_FamilyHistory_Select,WebNs.jbdb_FamilyHistory_Expand,WebNs.jbdb_FamilyHistory_Filter,WebNs.jbdb_FamilyHistory_Fixed,WebNs.jbdb_FamilyHistory_Result,WebNs.jbdb_FamilyHistory_FormattedResult>;
    jbdb_locationhistory_Character_jbdb_character: WebMappingRetrieve<WebNs.jbdb_LocationHistory_Select,WebNs.jbdb_LocationHistory_Expand,WebNs.jbdb_LocationHistory_Filter,WebNs.jbdb_LocationHistory_Fixed,WebNs.jbdb_LocationHistory_Result,WebNs.jbdb_LocationHistory_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  jbdb_characters: WebMappingRetrieve<WebNs.jbdb_Character_Select,WebNs.jbdb_Character_Expand,WebNs.jbdb_Character_Filter,WebNs.jbdb_Character_Fixed,WebNs.jbdb_Character_Result,WebNs.jbdb_Character_FormattedResult>;
}
interface WebEntitiesRelated {
  jbdb_characters: WebMappingRelated<WebNs.jbdb_Character_RelatedOne,WebNs.jbdb_Character_RelatedMany>;
}
interface WebEntitiesCUDA {
  jbdb_characters: WebMappingCUDA<WebNs.jbdb_Character_Create,WebNs.jbdb_Character_Update,WebNs.jbdb_Character_Select>;
}
