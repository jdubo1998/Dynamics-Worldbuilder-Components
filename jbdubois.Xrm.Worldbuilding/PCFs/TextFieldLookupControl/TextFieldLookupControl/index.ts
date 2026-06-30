import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { createRoot } from "react-dom/client";
import { GlobalStoreProvider } from "./store/globalStore";
import { BaseComponent } from "./components/baseComponent";
import * as React from "react";
import { loadCharacters } from "./data/dataLoader";

export class TextFieldLookupControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private root: ReturnType<typeof createRoot> | undefined;
    private notifyOutputChanged: () => void;
        
    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;

        // console.log("context:", context);
        // console.log("notifyOutputChanged:", notifyOutputChanged);
        // console.log("state:", state);
        // console.log("container:", container);
        // console.log("container is connected:", container?.isConnected);
        console.log(GlobalStoreProvider);
        console.log(BaseComponent);
        this.root = createRoot(container);
        console.log(this.root);
        // this.root.render(React.createElement(
        //     GlobalStoreProvider,
        //     null,
        //     React.createElement(BaseComponent, null)
        // ));
        try {
            this.root.render(
                React.createElement(
                    GlobalStoreProvider,
                    null,
                    React.createElement(BaseComponent, null)
                )
            );
        } catch (err) {
            console.error("***** React render failed:", err);
        }

        // loadCharacters(context);
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // const textFieldValue = context.parameters
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return { };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        this.root?.unmount();
    }
}
