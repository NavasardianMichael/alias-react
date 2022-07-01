import { SET_CURRENT_PAGE, SET_CURRENT_TURN_MEMBER_ID } from "./actionTypes";
import { T_SetCurrentPage, T_SetCurrentTurnMemberId } from "./types";

export const setCurrentPage: T_SetCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: { page }
    }
}

export const setCurrentTurnMemberId: T_SetCurrentTurnMemberId = (id) => {
    return {
        type: SET_CURRENT_TURN_MEMBER_ID,
        payload: { id }
    }
}