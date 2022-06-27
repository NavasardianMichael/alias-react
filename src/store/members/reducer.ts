import { D_MEMBER_1, D_MEMBER_2, D_MEMBER_3, D_MEMBER_4 } from "../../constants/members";
import { genId } from "../../helpers/common";
import { ADD_MEMBER } from "./actionTypes";
import { T_MembersState, T_MembersStateActions } from "./types";

export const initialMemberState: T_MembersState = {
    byId: {
        [D_MEMBER_1.id]: D_MEMBER_1,
        [D_MEMBER_2.id]: D_MEMBER_2,
        [D_MEMBER_3.id]: D_MEMBER_3,
        [D_MEMBER_4.id]: D_MEMBER_4,
    },
    allIds: [D_MEMBER_1.id, D_MEMBER_2.id, D_MEMBER_3.id, D_MEMBER_4.id]
}

function membersReducer(state: T_MembersState = initialMemberState, action: T_MembersStateActions): T_MembersState {

    switch (action.type) {
        case ADD_MEMBER: {
            const newMemberId = genId()
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [newMemberId]: {
                        id: newMemberId,
                        name: action.payload.name
                    }
                }
            }
        }
        default:
            return state
    }

}

export default membersReducer