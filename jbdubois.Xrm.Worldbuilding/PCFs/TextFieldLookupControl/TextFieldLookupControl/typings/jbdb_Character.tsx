export interface jbdb_Character {
  jbdb_characterid: string;
  jbdb_firstname?: string;
  jbdb_CurrentFamily?: {
    jbdb_name?: string;
    jbdb_familyid?: string;
  };
  jbdb_inspiration?: string;
}