import { IAction } from "./actions";
import { IGlobalStateProps } from "./globalStoreHelper";

export const reducer = (store: IGlobalStateProps, action: IAction) => {
    switch (action.type) {
        case "SET_TEXT_FIELD_VALUE":
            return {
                ...store,
                textValue: action.payload
            };
        case "SET_CHARACTERS":
            return {
                ...store,
                characters: action.payload
            };
        default:
            alert("Reducer received unknown action type");
            return store;
    }
}
