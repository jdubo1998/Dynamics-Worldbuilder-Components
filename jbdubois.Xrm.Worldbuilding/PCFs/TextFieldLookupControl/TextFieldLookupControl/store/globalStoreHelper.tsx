import { createContext, Dispatch, useContext } from "react";
import { IGlobalStoreProps } from "./globalStore";
import { IAction } from "./actions";

export const GlobalStoreContext = createContext<IGlobalStoreProps | undefined>(undefined);
export const GlobalDispatchContext = createContext<Dispatch<IAction> | undefined>(undefined);

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

export const useGlobalStore = (): [IGlobalStoreProps, Dispatch<IAction>] => {
    return [useGlobalState(), useGlobalDispatch()];
}
