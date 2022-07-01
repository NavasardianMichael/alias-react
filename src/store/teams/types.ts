import { G_PartialWithRequired } from "../../helpers/types"
import { ADD_TEAM, SET_TEAM_OPTIONS } from "./actionTypes"

// STATE SHAPE
export type T_Team = {
    id: string
    name: string
    points: number
    memberIds: string[]
}

export type T_TeamsState = {
    byId: {
        [key: T_Team['id']]: T_Team
    }
    allIds: T_Team['id'][]
}


// ACTION CREATORS
export type T_AddTeam = (name: T_Team['name']) => {
    type: typeof ADD_TEAM,
    payload: {
        name: T_Team['name']
    }
}

export type T_SetTeamOptions = (options: G_PartialWithRequired<T_Team, 'id'>) => {
    type: typeof SET_TEAM_OPTIONS,
    payload: {
        options: G_PartialWithRequired<T_Team, 'id'>
    }
}


// ACTION COMMON TYPE
export type T_TeamsActions = ReturnType<T_AddTeam> | ReturnType<T_SetTeamOptions>