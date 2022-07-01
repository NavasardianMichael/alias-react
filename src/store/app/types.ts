import { PAGES } from "../../constants/app"
import { G_ObjectValues } from "../../helpers/types"
import { T_Member } from "../members/types"
import { T_Team } from "../teams/types"
import { SET_CURRENT_PAGE, SET_CURRENT_TURN_MEMBER_ID } from "./actionTypes"

export type T_AppState = {
    currentPage: G_ObjectValues<typeof PAGES>
    membersSequenceIds: T_Member['id'][]
    currentTurnMemberId: T_Member['id']
}

export type T_SetCurrentPage = (page: T_AppState['currentPage']) => {
    type: typeof SET_CURRENT_PAGE,
    payload: {
        page: T_AppState['currentPage']
    }
}

export type T_SetCurrentTurnMemberId = (id: T_AppState['currentTurnMemberId']) => {
    type: typeof SET_CURRENT_TURN_MEMBER_ID,
    payload: {
        id: T_AppState['currentTurnMemberId']
    }
}

export type T_AppActions = ReturnType<T_SetCurrentPage> | ReturnType<T_SetCurrentTurnMemberId>