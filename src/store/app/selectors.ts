import { G_Selector } from "../../helpers/types";
import { T_AppState } from "./types";

export const selectCurrentPage: G_Selector<T_AppState['currentPage']> = (state)  => state.app.currentPage

export const selectCurrentTurnMemberId: G_Selector<T_AppState['currentTurnMemberId']> = (state)  => state.app.currentTurnMemberId

export const selectMembersSequenceIds: G_Selector<T_AppState['membersSequenceIds']> = (state)  => state.app.membersSequenceIds