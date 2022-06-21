import { SET_CURRENT_PAGE } from "./actionTypes";
import { T_SetCurrentPage } from "./types";

export const setCurrentPage: T_SetCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: { page }
    }
}