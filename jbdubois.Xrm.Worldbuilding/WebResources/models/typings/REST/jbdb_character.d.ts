declare namespace RestNS {
  interface jbdb_CharacterBase extends RestEntity {
    CreatedBy?: SDK.EntityReference | null;
    CreatedOn?: Date | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    ImportSequenceNumber?: number | null;
    ModifiedBy?: SDK.EntityReference | null;
    ModifiedOn?: Date | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    OverriddenCreatedOn?: Date | null;
    OwnerId?: SDK.EntityReference | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    OwningTeam?: SDK.EntityReference | null;
    OwningUser?: SDK.EntityReference | null;
    TimeZoneRuleVersionNumber?: number | null;
    UTCConversionTimeZoneCode?: number | null;
    VersionNumber?: number | null;
    jbdb_Age?: Date | null;
    jbdb_BirthDate?: Date | null;
    jbdb_BirthYear?: number | null;
    jbdb_CharacterId?: string | null;
    jbdb_CurrentFamily?: SDK.EntityReference | null;
    jbdb_CurrentLocation?: SDK.EntityReference | null;
    jbdb_CurrentSubterritory?: SDK.EntityReference | null;
    jbdb_CurrentTerritory?: SDK.EntityReference | null;
    jbdb_FirstName?: string | null;
    jbdb_HeightInInches?: number | null;
    jbdb_HeroForgeCreationStage?: SDK.OptionSet<jbdb_character_jbdb_heroforgecreationstage> | null;
    jbdb_HeroForgeURL?: string | null;
    jbdb_InFamilyTree?: boolean | null;
    jbdb_Inspiration?: string | null;
    jbdb_IsHeroForgeComplete?: boolean | null;
    jbdb_LoreCreationStage?: SDK.OptionSet<jbdb_generalcreativecreationstages> | null;
    jbdb_Name?: string | null;
    jbdb_Title?: string | null;
    statecode?: SDK.OptionSet<jbdb_character_statecode> | null;
    statuscode?: SDK.OptionSet<jbdb_character_statuscode> | null;
  }
  interface jbdb_Character extends jbdb_CharacterBase {
    jbdb_character_CurrentFamily_jbdb_family?: jbdb_Family | null;
    jbdb_character_CurrentLocation_jbdb_location?: jbdb_Location | null;
    jbdb_character_CurrentSubterritory_jbdb_subterritory?: jbdb_Subterritory | null;
    jbdb_character_CurrentTerritory_jbdb_territory?: jbdb_Territory | null;
    jbdb_characterrelation_CharacterFrom_jbdb_character?: jbdb_CharacterRelation[] | null;
    jbdb_characterrelation_CharacterTo_jbdb_character?: jbdb_CharacterRelation[] | null;
    jbdb_familyhistory_Character_jbdb_character?: jbdb_FamilyHistory[] | null;
    jbdb_locationhistory_Character_jbdb_character?: jbdb_LocationHistory[] | null;
  }
  interface jbdb_CharacterResult extends jbdb_CharacterBase {
    jbdb_character_CurrentFamily_jbdb_family?: jbdb_Family | null;
    jbdb_character_CurrentLocation_jbdb_location?: jbdb_Location | null;
    jbdb_character_CurrentSubterritory_jbdb_subterritory?: jbdb_Subterritory | null;
    jbdb_character_CurrentTerritory_jbdb_territory?: jbdb_Territory | null;
    jbdb_characterrelation_CharacterFrom_jbdb_character?: SDK.Results<jbdb_CharacterRelationResult> | null;
    jbdb_characterrelation_CharacterTo_jbdb_character?: SDK.Results<jbdb_CharacterRelationResult> | null;
    jbdb_familyhistory_Character_jbdb_character?: SDK.Results<jbdb_FamilyHistoryResult> | null;
    jbdb_locationhistory_Character_jbdb_character?: SDK.Results<jbdb_LocationHistoryResult> | null;
  }
  interface jbdb_Character_Select extends jbdb_Character_Expand {
    CreatedBy: RestAttribute<jbdb_Character_Select>;
    CreatedOn: RestAttribute<jbdb_Character_Select>;
    CreatedOnBehalfBy: RestAttribute<jbdb_Character_Select>;
    ImportSequenceNumber: RestAttribute<jbdb_Character_Select>;
    ModifiedBy: RestAttribute<jbdb_Character_Select>;
    ModifiedOn: RestAttribute<jbdb_Character_Select>;
    ModifiedOnBehalfBy: RestAttribute<jbdb_Character_Select>;
    OverriddenCreatedOn: RestAttribute<jbdb_Character_Select>;
    OwnerId: RestAttribute<jbdb_Character_Select>;
    OwningBusinessUnit: RestAttribute<jbdb_Character_Select>;
    OwningTeam: RestAttribute<jbdb_Character_Select>;
    OwningUser: RestAttribute<jbdb_Character_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<jbdb_Character_Select>;
    UTCConversionTimeZoneCode: RestAttribute<jbdb_Character_Select>;
    VersionNumber: RestAttribute<jbdb_Character_Select>;
    jbdb_Age: RestAttribute<jbdb_Character_Select>;
    jbdb_BirthDate: RestAttribute<jbdb_Character_Select>;
    jbdb_BirthYear: RestAttribute<jbdb_Character_Select>;
    jbdb_CharacterId: RestAttribute<jbdb_Character_Select>;
    jbdb_CurrentFamily: RestAttribute<jbdb_Character_Select>;
    jbdb_CurrentLocation: RestAttribute<jbdb_Character_Select>;
    jbdb_CurrentSubterritory: RestAttribute<jbdb_Character_Select>;
    jbdb_CurrentTerritory: RestAttribute<jbdb_Character_Select>;
    jbdb_FirstName: RestAttribute<jbdb_Character_Select>;
    jbdb_HeightInInches: RestAttribute<jbdb_Character_Select>;
    jbdb_HeroForgeCreationStage: RestAttribute<jbdb_Character_Select>;
    jbdb_HeroForgeURL: RestAttribute<jbdb_Character_Select>;
    jbdb_InFamilyTree: RestAttribute<jbdb_Character_Select>;
    jbdb_Inspiration: RestAttribute<jbdb_Character_Select>;
    jbdb_IsHeroForgeComplete: RestAttribute<jbdb_Character_Select>;
    jbdb_LoreCreationStage: RestAttribute<jbdb_Character_Select>;
    jbdb_Name: RestAttribute<jbdb_Character_Select>;
    jbdb_Title: RestAttribute<jbdb_Character_Select>;
    statecode: RestAttribute<jbdb_Character_Select>;
    statuscode: RestAttribute<jbdb_Character_Select>;
  }
  interface jbdb_Character_Filter {
    CreatedBy: XQR.EntityReferenceFilter;
    CreatedOn: Date;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    ImportSequenceNumber: number;
    ModifiedBy: XQR.EntityReferenceFilter;
    ModifiedOn: Date;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    OverriddenCreatedOn: Date;
    OwnerId: XQR.EntityReferenceFilter;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    OwningTeam: XQR.EntityReferenceFilter;
    OwningUser: XQR.EntityReferenceFilter;
    TimeZoneRuleVersionNumber: number;
    UTCConversionTimeZoneCode: number;
    VersionNumber: number;
    jbdb_Age: Date;
    jbdb_BirthDate: Date;
    jbdb_BirthYear: number;
    jbdb_CharacterId: XQR.Guid;
    jbdb_CurrentFamily: XQR.EntityReferenceFilter;
    jbdb_CurrentLocation: XQR.EntityReferenceFilter;
    jbdb_CurrentSubterritory: XQR.EntityReferenceFilter;
    jbdb_CurrentTerritory: XQR.EntityReferenceFilter;
    jbdb_FirstName: string;
    jbdb_HeightInInches: number;
    jbdb_HeroForgeCreationStage: XQR.ValueContainerFilter<jbdb_character_jbdb_heroforgecreationstage>;
    jbdb_HeroForgeURL: string;
    jbdb_InFamilyTree: boolean;
    jbdb_Inspiration: string;
    jbdb_IsHeroForgeComplete: boolean;
    jbdb_LoreCreationStage: XQR.ValueContainerFilter<jbdb_generalcreativecreationstages>;
    jbdb_Name: string;
    jbdb_Title: string;
    statecode: XQR.ValueContainerFilter<jbdb_character_statecode>;
    statuscode: XQR.ValueContainerFilter<jbdb_character_statuscode>;
  }
  interface jbdb_Character_Expand {
    jbdb_character_CurrentFamily_jbdb_family: RestExpand<jbdb_Character_Select, jbdb_Family_Select>;
    jbdb_character_CurrentLocation_jbdb_location: RestExpand<jbdb_Character_Select, jbdb_Location_Select>;
    jbdb_character_CurrentSubterritory_jbdb_subterritory: RestExpand<jbdb_Character_Select, jbdb_Subterritory_Select>;
    jbdb_character_CurrentTerritory_jbdb_territory: RestExpand<jbdb_Character_Select, jbdb_Territory_Select>;
    jbdb_characterrelation_CharacterFrom_jbdb_character: RestExpand<jbdb_Character_Select, jbdb_CharacterRelation_Select>;
    jbdb_characterrelation_CharacterTo_jbdb_character: RestExpand<jbdb_Character_Select, jbdb_CharacterRelation_Select>;
    jbdb_familyhistory_Character_jbdb_character: RestExpand<jbdb_Character_Select, jbdb_FamilyHistory_Select>;
    jbdb_locationhistory_Character_jbdb_character: RestExpand<jbdb_Character_Select, jbdb_LocationHistory_Select>;
  }
}
interface RestEntities {
  jbdb_Character: RestMapping<RestNS.jbdb_Character,RestNS.jbdb_Character_Select,RestNS.jbdb_Character_Expand,RestNS.jbdb_Character_Filter,RestNS.jbdb_CharacterResult>;
}
