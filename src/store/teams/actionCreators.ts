import { ADD_TEAM, SET_TEAM_OPTIONS } from "./actionTypes";
import { T_AddTeam, T_SetTeamOptions } from "./types";

export const addTeam: T_AddTeam = (name) => {
    return {
        type: ADD_TEAM,
        payload: { name }
    }
}

export const setTeamOptions: T_SetTeamOptions = (options) => {
    return {
        type: SET_TEAM_OPTIONS,
        payload: { options }
    }
}