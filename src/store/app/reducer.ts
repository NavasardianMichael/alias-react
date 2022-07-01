import { PAGES } from "../../constants/app";
import { D_MEMBER_1, D_MEMBER_2, D_MEMBER_3, D_MEMBER_4 } from "../../constants/members";
import { SET_CURRENT_PAGE, SET_CURRENT_TURN_MEMBER_ID } from "./actionTypes";
import { T_AppState, T_AppActions } from "./types";

export const initialAppState: T_AppState = {
    currentPage: PAGES.home,
    membersSequenceIds: [D_MEMBER_1.id, D_MEMBER_3.id, D_MEMBER_2.id, D_MEMBER_4.id],
    currentTurnMemberId: D_MEMBER_1.id
}

export function appReducer(state: T_AppState = initialAppState, action: T_AppActions): T_AppState {

    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.page
            }
        case SET_CURRENT_TURN_MEMBER_ID:
            return {
                ...state,
                currentTurnMemberId: action.payload.id
            }
        default:
            return state
    }

}

export default appReducer