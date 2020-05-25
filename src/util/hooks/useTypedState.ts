import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootState } from "../../domain/store";

export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;
