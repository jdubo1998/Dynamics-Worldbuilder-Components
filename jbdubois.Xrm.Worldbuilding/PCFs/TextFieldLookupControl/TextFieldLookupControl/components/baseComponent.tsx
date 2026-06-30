import { Combobox, Option, useId, Label, FluentProvider, webLightTheme } from "@fluentui/react-components";
import { jbdb_Character } from "../typings/jbdb_Character";
import { GlobalDispatchContext, GlobalStoreContext } from "../store/globalStoreHelper";
import { useContext } from "react";

export const BaseComponent = () => {
    console.log("****BaseComponent***");
    const state = useContext(GlobalStoreContext);
    const dispatch = useContext(GlobalDispatchContext);
    
    const comboId = useId("combobox");

    return (
        <FluentProvider theme={webLightTheme}>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                Test
                {/* <Combobox 
                    id={comboId} 
                    placeholder="Select an option..."
                    freeform={true}
                    autoComplete="on"
                    // paceholder?=Enter an inspiration or select an existing:
                >
                    {state?.characters.map((character) => (
                    <Option key={character.jbdb_firstname} text={`${character.jbdb_firstname}`} value={character.jbdb_inspiration}>
                        {character.jbdb_firstname} {character.jbdb_CurrentFamily?.jbdb_name ?? ""}
                        <br></br>
                        {character.jbdb_inspiration}
                    </Option>
                    ))}
                </Combobox> */}
            </div>
        </FluentProvider>
    );
}
