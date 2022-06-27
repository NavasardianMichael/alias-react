import { PAGES } from "../../constants/view";
import { SET_CURRENT_PAGE } from "./actionTypes";
import { T_ViewState, T_ViewStateActions } from "./types";

export const initialViewState: T_ViewState = {
    currentPage: PAGES.home
}

export function viewReducer(state: T_ViewState = initialViewState, action: T_ViewStateActions): T_ViewState {

    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.page
            }
        default:
            return state
    }

}

export default viewReducer