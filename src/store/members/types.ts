import { ADD_MEMBER } from "./actionTypes"

// STATE SHAPE
export type T_Member = {
    id: string
    name: string
}

export type T_MembersState = {
    byId: {
        [key: T_Member['id']]: T_Member
    }
    allIds: T_Member['id'][]
}


// ACTION CREATORS
export type T_AddMember = (name: T_Member['name']) => {
    type: typeof ADD_MEMBER,
    payload: {
        name: T_Member['name']
    }
}


// ACTION COMMON TYPE
export type T_MembersStateActions = ReturnType<T_AddMember>