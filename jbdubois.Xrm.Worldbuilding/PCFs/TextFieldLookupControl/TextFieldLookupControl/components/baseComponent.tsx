import { Combobox, Option, useId, Label, FluentProvider, webLightTheme, SelectionEvents, OptionOnSelectData } from "@fluentui/react-components";
import { useGlobalStore } from "../store/globalStoreHelper";
import {  useEffect, useState } from "react";
import { loadCharacters } from "../data/dataLoader";

export const BaseComponent = () => {
    const [state, dispatch] = useGlobalStore();
    const [isOpen, setIsOpen] = useState(false);
    
    const comboId = useId("combobox");

    useEffect(() => {
        void loadCharacters(dispatch);
    }, []);

    const setTextValue = (value?: string) => {
        dispatch?.({
            type: "SET_TEXT_FIELD_VALUE",
            payload: value ?? null
        });
    }

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
    }

    const onOptionSelect = (event: SelectionEvents, data: OptionOnSelectData) => {
        setTextValue(data.optionValue ?? "");
    }

    const filteredOptions = state?.characters.filter((character) =>
        character.jbdb_inspiration
            ?.toLowerCase()
            .includes((state.textValue ?? "").toLowerCase())
    ) ?? [];

    return (
        <FluentProvider theme={webLightTheme}>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <Combobox 
                    id={comboId} 
                    placeholder="Enter an inspiration or select an existing:"
                    freeform={true}
                    autoComplete="on"
                    open={isOpen && filteredOptions.length > 0}
                    onOpenChange={(_, data) => setIsOpen(data.open)}
                    onChange={onFieldChange}
                    onOptionSelect={onOptionSelect}
                    value={state?.textValue ?? ""}
                >
                    {filteredOptions.map((character) => (
                    <Option key={character.jbdb_characterid} text={`${character.jbdb_inspiration}`} value={character.jbdb_inspiration}>
                        {character.jbdb_inspiration}
                        {character.jbdb_firstname != null && (<>
                            <br></br>
                            {character.jbdb_firstname} {character.jbdb_CurrentFamily?.jbdb_name ?? ""}
                        </>)}
                    </Option>
                    ))}
                </Combobox>
            </div>
        </FluentProvider>
    );
}
