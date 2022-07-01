import { SET_SETTINGS_OPTIONS } from "./actionTypes"
import { T_SetSettingsOptions } from "./types"

export const setCurrentPage: T_SetSettingsOptions = (options) => {
    return {
        type: SET_SETTINGS_OPTIONS,
        payload: { options }
    }
}