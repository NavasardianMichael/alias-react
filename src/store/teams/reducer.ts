import { D_TEAM_1, D_TEAM_2 } from "../../constants/teams";
import { genId } from "../../helpers/common";
import { ADD_TEAM, SET_TEAM_OPTIONS } from "./actionTypes";
import { T_TeamsState, T_TeamsStateActions } from "./types";

export const initialTeamState: T_TeamsState = {
    byId: {
        [D_TEAM_1.id]: D_TEAM_1,
        [D_TEAM_2.id]: D_TEAM_2,
    },
    allIds: [D_TEAM_1.id, D_TEAM_2.id]
}

function teamsReducer(state: T_TeamsState = initialTeamState, action: T_TeamsStateActions): T_TeamsState {

    switch (action.type) {
        case ADD_TEAM: {
            const newTeamId = genId()
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [newTeamId]: {
                        id: newTeamId,
                        name: action.payload.name,
                        points: 0,
                        memberIds: []
                    }
                }
            }
        }
        case SET_TEAM_OPTIONS: {
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

export default teamsReducer