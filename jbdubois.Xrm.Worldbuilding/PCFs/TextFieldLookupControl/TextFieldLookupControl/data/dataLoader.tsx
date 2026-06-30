import { IInputs } from "../generated/ManifestTypes";
import { jbdb_Character } from "../typings/jbdb_Character";
import { mock_jbdb_Characters } from "./mock/jbdb_Character.mock";
import { isWatchMode } from "./mock/testHelper";
import { globalDispatch } from "../store/globalStore";

export const loadCharacters = async (context: ComponentFramework.Context<IInputs>): Promise<void> => {
    console.log("****loadCharacters***");
    if (isWatchMode(context)) {
        console.log("***   WATCH MODE   ***\nLoading mock data...");

        globalDispatch?.({
            type: "SET_CHARACTERS",
            payload: mock_jbdb_Characters
        });
        return;
    }

    
    console.log("***   LIVE MODE   ***\nLoading dataverse data...");

    Xrm.WebApi.retrieveMultipleRecords<jbdb_Character>("jbdb_characters", "?$select=jbdb_firstname,jbdb_inspiration&$expand=jbdb_CurrentFamily($select=jbdb_name)")
    .then((results) => {
        globalDispatch?.({
            type: "SET_CHARACTERS",
            payload: results?.entities ?? []
        });
        return;
    })
    .catch((err) => {
        throw new Error("Failed to retrieve characters from dataverse.");
    });

    return Promise.resolve();
}