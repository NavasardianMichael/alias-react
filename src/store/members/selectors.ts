import { G_Selector } from "../../helpers/types";
import { T_Team } from "../teams/types";
import { T_Member, T_MembersState } from "./types";

export const selectMembersByTeamId = (teamIds: T_Team['memberIds']): G_Selector<T_MembersState['byId']> => {
    return (state) => {
        let result = {}
        for(id of teamIds) {
            state.members[teamId].byId.
        }
    }
}