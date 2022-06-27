import { ADD_TEAM } from "./actionTypes"

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


// ACTION COMMON TYPE
export type T_TeamsStateActions = ReturnType<T_AddTeam>