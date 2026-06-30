import { IAction } from "./actions";
import { IGlobalStoreProps } from "./globalStore";

export const reducer = (store: IGlobalStoreProps, action: IAction) => {
    switch (action.type) {
        case "SET_TEXT_FIELD_VALUE":
            return {
                ...store,
                name: action.payload
            };
        case "SET_CHARACTERS":
            return {
                ...store,
                name: action.payload
            };
        default:
            alert("Reducer received unknown action type");
            return store;
    }
}
