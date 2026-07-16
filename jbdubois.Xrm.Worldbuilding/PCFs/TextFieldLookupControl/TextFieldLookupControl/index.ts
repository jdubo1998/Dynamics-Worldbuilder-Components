import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { createRoot } from "react-dom/client";
import { GlobalStoreProvider } from "./store/globalStore";
import { BaseComponent } from "./components/baseComponent";
import * as React from "react";

export class TextFieldLookupControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private root: ReturnType<typeof createRoot> | undefined;
    private reactTree: React.ReactElement;
    private notifyOutputChanged: () => void;

    /* Manifest Fields */
    private _textValue: string | null = null;
    
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
        this.root = createRoot(container);

        this._textValue = context.parameters.textFieldProperty.raw ?? "";

        try {
            this.reactTree = React.createElement(
                GlobalStoreProvider,
                {
                    textValue: this._textValue,
                    onTextFieldChange: (value: string | null) => {
                        this._textValue = value;
                        this.notifyOutputChanged();
                    }
                }
            );

            this.root.render(this.reactTree);
        } catch (err) {
            console.error("*** React render failed:", err);
        }
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Empty updateView method.
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {
            textFieldProperty: this._textValue ?? ""
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        this.root?.unmount();
    }
}
