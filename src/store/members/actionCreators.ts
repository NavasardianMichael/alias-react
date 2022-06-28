import { ADD_MEMBER, SET_MEMBER_OPTIONS } from "./actionTypes";
import { T_AddMember, T_SetMemberOptions } from "./types";

export const addMember: T_AddMember = (name) => {
    return {
        type: ADD_MEMBER,
        payload: { name }
    }
}

export const setMemberOptions: T_SetMemberOptions = (options) => {
    return {
        type: SET_MEMBER_OPTIONS,
        payload: { options }
    }
}