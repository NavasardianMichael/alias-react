import { ADD_TEAM } from "./actionTypes";
import { T_AddTeam } from "./types";

export const addTeam: T_AddTeam = (name) => {
    return {
        type: ADD_TEAM,
        payload: { name }
    }
}