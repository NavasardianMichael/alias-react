import { D_MEMBER_1, D_MEMBER_2, D_MEMBER_3, D_MEMBER_4 } from "../../constants/members";
import { SET_MEMBER_OPTIONS } from "./actionTypes";
import { T_MembersState, T_MembersActions } from "./types";

export const initialMemberState: T_MembersState = {
    byId: {
        [D_MEMBER_1.id]: D_MEMBER_1,
        [D_MEMBER_2.id]: D_MEMBER_2,
        [D_MEMBER_3.id]: D_MEMBER_3,
        [D_MEMBER_4.id]: D_MEMBER_4,
    },
    allIds: [D_MEMBER_1.id, D_MEMBER_2.id, D_MEMBER_3.id, D_MEMBER_4.id]
}

function membersReducer(state: T_MembersState = initialMemberState, action: T_MembersActions): T_MembersState {

    switch (action.type) {
        case SET_MEMBER_OPTIONS: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.options.id]: {
                        ...state.byId[action.payload.options.id],
                        ...action.payload.options
                    }
                }
            }
        }
        default:
            return state
    }

}

export default membersReducer