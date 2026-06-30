import { jbdb_Character } from "../typings/jbdb_Character";

interface SET_TEXT_FIELD_VALUE {
    type: "SET_TEXT_FIELD_VALUE";
    payload: string;
}

interface SET_CHARACTERS {
    type: "SET_CHARACTERS";
    payload: jbdb_Character[];
}

export type IAction = SET_TEXT_FIELD_VALUE
    | SET_CHARACTERS;