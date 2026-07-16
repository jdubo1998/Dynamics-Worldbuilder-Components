import { StrictMode, useReducer, useEffect } from "react";
import { GlobalDispatchContext, GlobalStoreContext, IGlobalStateProps } from "./globalStoreHelper";
import { reducer } from "./reducer";
import { jbdb_Character } from "../typings/jbdb_Character";
import { IAction } from "./actions";
import { BaseComponent } from "../components/baseComponent";

export interface IGlobalStoreProps {
    onTextFieldChange?: (value: string | null) => void;
    textValue: string | null;
}

// export const GlobalStoreProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
export const GlobalStoreProvider = (props: IGlobalStoreProps) => {
    const initialState: IGlobalStateProps = {
        textValue: props.textValue,
        characters: []
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        props.onTextFieldChange?.(state.textValue);
    }, [state.textValue]);

    return (
        <GlobalStoreContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                <BaseComponent />
                {/* {children} */}
            </GlobalDispatchContext.Provider>
        </GlobalStoreContext.Provider>
    );
};
