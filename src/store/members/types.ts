import { G_PartialWithRequired } from "../../helpers/types"
import { T_Team } from "../teams/types"
import { ADD_MEMBER, SET_MEMBER_OPTIONS } from "./actionTypes"

// STATE SHAPE
export type T_Member = {
    id: string
    name: string
    teamId: T_Team['id']
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

export type T_SetMemberOptions = (options: G_PartialWithRequired<T_Member, 'id'>) => {
    type: typeof SET_MEMBER_OPTIONS,
    payload: {
        options: G_PartialWithRequired<T_Member, 'id'>
    }
}


// ACTION COMMON TYPE
export type T_MembersActions = ReturnType<T_AddMember> | ReturnType<T_SetMemberOptions>