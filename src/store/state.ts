import { createContext } from "react";
import { PAGES } from "../constants/view";
import { T_ViewState } from "./view/types";

export const initialViewState: T_ViewState = {
    currentPage: PAGES.home
}

export function initState() {
    const ViewContext = createContext<T_ViewState | null>(null)

    return {
        ViewContext
    }
}