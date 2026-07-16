import { IInputs } from "../generated/ManifestTypes";
import { IAction } from "../store/actions";
import { jbdb_Character } from "../typings/jbdb_Character";
import { mock_jbdb_Characters } from "./mock/jbdb_Character.mock";

const mockData = window.location.hostname === "localhost";

export const loadCharacters = async (dispatch: React.Dispatch<IAction>): Promise<void> => {
    if (mockData) {
        console.log("***   MOCK MODE   ***\nLoading mock data...");

        dispatch?.({
            type: "SET_CHARACTERS",
            payload: mock_jbdb_Characters
        });
        return;
    }

    
    console.log("***   LIVE MODE   ***\nLoading dataverse data...");

    Xrm.WebApi.retrieveMultipleRecords<jbdb_Character>("jbdb_character", "?$select=jbdb_firstname,jbdb_inspiration&$expand=jbdb_CurrentFamily($select=jbdb_name)")
    .then((results) => {
        dispatch?.({
            type: "SET_CHARACTERS",
            payload: results?.entities ?? []
        });
        return;
    })
    .catch((err) => {
        throw new Error(`Failed to retrieve characters from dataverse: ${err.message}`);
    });

    return Promise.resolve();
}