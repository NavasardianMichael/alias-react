import { G_Selector } from "../../helpers/types";
import { T_MembersState } from "./types";

export const selectMembers: G_Selector<T_MembersState['byId']> = (state)  => state.members.byId

export const selectMemberIds: G_Selector<T_MembersState['allIds']> = (state)  => state.members.allIds