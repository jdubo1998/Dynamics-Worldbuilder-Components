import { IInputs } from "../../generated/ManifestTypes";

type PCFMode = "authoring" | "runtime" | "preview";

const PREVIEW = "preview" as const;
const RUNTIME = "runtime" as const;
const AUTHORING = "authoring" as const;

export const isWatchMode = (context: ComponentFramework.Context<IInputs>) => (context.mode as unknown as PCFMode) === PREVIEW;

export const isRuntime = (context: ComponentFramework.Context<IInputs>) => (context.mode as unknown as PCFMode) === RUNTIME;

export const isAuthoring = (context: ComponentFramework.Context<IInputs>) => (context.mode as unknown as PCFMode) === AUTHORING;
