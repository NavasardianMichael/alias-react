import { PAGES } from "../../constants/view"
import { G_ObjectValues } from "../../helpers/types"
import { SET_CURRENT_PAGE } from "./actionTypes"

export type T_ViewState = {
    currentPage: G_ObjectValues<typeof PAGES>
}

export type T_SetCurrentPage = (page: T_ViewState['currentPage']) => {
    type: typeof SET_CURRENT_PAGE,
    payload: {
        page: T_ViewState['currentPage']
    }
}

export type T_ViewStateActions = ReturnType<T_SetCurrentPage>