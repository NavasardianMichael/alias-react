import { ADD_MEMBER } from "./actionTypes";
import { T_AddMember } from "./types";

export const addMember: T_AddMember = (name) => {
    return {
        type: ADD_MEMBER,
        payload: { name }
    }
}