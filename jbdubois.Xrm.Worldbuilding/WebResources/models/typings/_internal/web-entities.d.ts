interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
declare namespace WebNs {
  interface WebEntity {
  }
  interface WebEntity_Fixed {
    "@odata.etag": string;
  }
  interface jbdb_Character_Base extends WebEntity {
  }
  interface jbdb_Character_Fixed extends WebEntity_Fixed {
    jbdb_characterid: string;
  }
  interface jbdb_Character extends jbdb_Character_Base, jbdb_Character_Relationships {
  }
  interface jbdb_Character_Relationships {
  }
  interface jbdb_Character_Result extends jbdb_Character_Base, jbdb_Character_Relationships {
  }
  interface jbdb_Character_FormattedResult {
  }
  interface jbdb_Character_Select {
  }
  interface jbdb_Character_Expand {
  }
  interface jbdb_Character_Filter {
  }
  interface jbdb_Character_Create extends jbdb_Character {
  }
  interface jbdb_Character_Update extends jbdb_Character {
  }
  interface jbdb_CharacterRelation_Base extends WebEntity {
  }
  interface jbdb_CharacterRelation_Fixed extends WebEntity_Fixed {
    jbdb_characterrelationid: string;
  }
  interface jbdb_CharacterRelation extends jbdb_CharacterRelation_Base, jbdb_CharacterRelation_Relationships {
  }
  interface jbdb_CharacterRelation_Relationships {
  }
  interface jbdb_CharacterRelation_Result extends jbdb_CharacterRelation_Base, jbdb_CharacterRelation_Relationships {
  }
  interface jbdb_CharacterRelation_FormattedResult {
  }
  interface jbdb_CharacterRelation_Select {
  }
  interface jbdb_CharacterRelation_Expand {
  }
  interface jbdb_CharacterRelation_Filter {
  }
  interface jbdb_CharacterRelation_Create extends jbdb_CharacterRelation {
  }
  interface jbdb_CharacterRelation_Update extends jbdb_CharacterRelation {
  }
  interface jbdb_Family_Base extends WebEntity {
  }
  interface jbdb_Family_Fixed extends WebEntity_Fixed {
    jbdb_familyid: string;
  }
  interface jbdb_Family extends jbdb_Family_Base, jbdb_Family_Relationships {
  }
  interface jbdb_Family_Relationships {
  }
  interface jbdb_Family_Result extends jbdb_Family_Base, jbdb_Family_Relationships {
  }
  interface jbdb_Family_FormattedResult {
  }
  interface jbdb_Family_Select {
  }
  interface jbdb_Family_Expand {
  }
  interface jbdb_Family_Filter {
  }
  interface jbdb_Family_Create extends jbdb_Family {
  }
  interface jbdb_Family_Update extends jbdb_Family {
  }
  interface jbdb_FamilyHistory_Base extends WebEntity {
  }
  interface jbdb_FamilyHistory_Fixed extends WebEntity_Fixed {
    jbdb_familyhistoryid: string;
  }
  interface jbdb_FamilyHistory extends jbdb_FamilyHistory_Base, jbdb_FamilyHistory_Relationships {
  }
  interface jbdb_FamilyHistory_Relationships {
  }
  interface jbdb_FamilyHistory_Result extends jbdb_FamilyHistory_Base, jbdb_FamilyHistory_Relationships {
  }
  interface jbdb_FamilyHistory_FormattedResult {
  }
  interface jbdb_FamilyHistory_Select {
  }
  interface jbdb_FamilyHistory_Expand {
  }
  interface jbdb_FamilyHistory_Filter {
  }
  interface jbdb_FamilyHistory_Create extends jbdb_FamilyHistory {
  }
  interface jbdb_FamilyHistory_Update extends jbdb_FamilyHistory {
  }
  interface jbdb_Location_Base extends WebEntity {
  }
  interface jbdb_Location_Fixed extends WebEntity_Fixed {
    jbdb_locationid: string;
  }
  interface jbdb_Location extends jbdb_Location_Base, jbdb_Location_Relationships {
  }
  interface jbdb_Location_Relationships {
  }
  interface jbdb_Location_Result extends jbdb_Location_Base, jbdb_Location_Relationships {
  }
  interface jbdb_Location_FormattedResult {
  }
  interface jbdb_Location_Select {
  }
  interface jbdb_Location_Expand {
  }
  interface jbdb_Location_Filter {
  }
  interface jbdb_Location_Create extends jbdb_Location {
  }
  interface jbdb_Location_Update extends jbdb_Location {
  }
  interface jbdb_LocationHistory_Base extends WebEntity {
  }
  interface jbdb_LocationHistory_Fixed extends WebEntity_Fixed {
    jbdb_locationhistoryid: string;
  }
  interface jbdb_LocationHistory extends jbdb_LocationHistory_Base, jbdb_LocationHistory_Relationships {
  }
  interface jbdb_LocationHistory_Relationships {
  }
  interface jbdb_LocationHistory_Result extends jbdb_LocationHistory_Base, jbdb_LocationHistory_Relationships {
  }
  interface jbdb_LocationHistory_FormattedResult {
  }
  interface jbdb_LocationHistory_Select {
  }
  interface jbdb_LocationHistory_Expand {
  }
  interface jbdb_LocationHistory_Filter {
  }
  interface jbdb_LocationHistory_Create extends jbdb_LocationHistory {
  }
  interface jbdb_LocationHistory_Update extends jbdb_LocationHistory {
  }
  interface jbdb_Region_Base extends WebEntity {
  }
  interface jbdb_Region_Fixed extends WebEntity_Fixed {
    jbdb_regionid: string;
  }
  interface jbdb_Region extends jbdb_Region_Base, jbdb_Region_Relationships {
  }
  interface jbdb_Region_Relationships {
  }
  interface jbdb_Region_Result extends jbdb_Region_Base, jbdb_Region_Relationships {
  }
  interface jbdb_Region_FormattedResult {
  }
  interface jbdb_Region_Select {
  }
  interface jbdb_Region_Expand {
  }
  interface jbdb_Region_Filter {
  }
  interface jbdb_Region_Create extends jbdb_Region {
  }
  interface jbdb_Region_Update extends jbdb_Region {
  }
  interface jbdb_Subterritory_Base extends WebEntity {
  }
  interface jbdb_Subterritory_Fixed extends WebEntity_Fixed {
    jbdb_subterritoryid: string;
  }
  interface jbdb_Subterritory extends jbdb_Subterritory_Base, jbdb_Subterritory_Relationships {
  }
  interface jbdb_Subterritory_Relationships {
  }
  interface jbdb_Subterritory_Result extends jbdb_Subterritory_Base, jbdb_Subterritory_Relationships {
  }
  interface jbdb_Subterritory_FormattedResult {
  }
  interface jbdb_Subterritory_Select {
  }
  interface jbdb_Subterritory_Expand {
  }
  interface jbdb_Subterritory_Filter {
  }
  interface jbdb_Subterritory_Create extends jbdb_Subterritory {
  }
  interface jbdb_Subterritory_Update extends jbdb_Subterritory {
  }
  interface jbdb_Territory_Base extends WebEntity {
  }
  interface jbdb_Territory_Fixed extends WebEntity_Fixed {
    jbdb_territoryid: string;
  }
  interface jbdb_Territory extends jbdb_Territory_Base, jbdb_Territory_Relationships {
  }
  interface jbdb_Territory_Relationships {
  }
  interface jbdb_Territory_Result extends jbdb_Territory_Base, jbdb_Territory_Relationships {
  }
  interface jbdb_Territory_FormattedResult {
  }
  interface jbdb_Territory_Select {
  }
  interface jbdb_Territory_Expand {
  }
  interface jbdb_Territory_Filter {
  }
  interface jbdb_Territory_Create extends jbdb_Territory {
  }
  interface jbdb_Territory_Update extends jbdb_Territory {
  }
}
