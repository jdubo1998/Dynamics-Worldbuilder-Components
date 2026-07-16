import { createContext, Dispatch, useContext } from "react";
import { IAction } from "./actions";
import { jbdb_Character } from "../typings/jbdb_Character";

export const GlobalStoreContext = createContext<IGlobalStateProps | undefined>(undefined);
export const GlobalDispatchContext = createContext<Dispatch<IAction> | undefined>(undefined);

export interface IGlobalStateProps {
    textValue: string | null;
    characters: jbdb_Character[];
}

const useGlobalState = () => {
    const context = useContext(GlobalStoreContext);
    if (context === undefined) {
        throw new Error("useGlobalStore must be used within a GlobalStoreContext.Provider");
    }

    return context;
}

const useGlobalDispatch = () => {
    const context = useContext(GlobalDispatchContext);
    if (context === undefined) {
        throw new Error("useGlobalDispatch must be used within a GlobalDispatchContext.Provider");
    }

    return context;
}

export const useGlobalStore = (): [IGlobalStateProps, Dispatch<IAction>] => {
    return [useGlobalState(), useGlobalDispatch()];
}
