import { StrictMode, useReducer, useEffect } from "react";
import { GlobalDispatchContext, GlobalStoreContext } from "./globalStoreHelper";
import { reducer } from "./reducer";
import { jbdb_Character } from "../typings/jbdb_Character";
import { isWatchMode } from "../data/mock/testHelper";
import { IAction } from "./actions";

export interface IGlobalStoreProps {
    characters: jbdb_Character[];
}

export let globalDispatch: React.Dispatch<IAction> | null = null;

export const GlobalStoreProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    console.log("****GlobalStoreProvider***");
    const initialState: IGlobalStoreProps = {
        characters: []
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        globalDispatch = dispatch;
        return () => {
            globalDispatch = null;
        };
    }, [dispatch]);

    return (
        <StrictMode>
            <GlobalStoreContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={dispatch}>
                    {children}
                </GlobalDispatchContext.Provider>
            </GlobalStoreContext.Provider>
        </StrictMode>
    );
};
