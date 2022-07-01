import { SET_SETTINGS_OPTIONS } from "./actionTypes";
import { T_SettingsActions, T_SettingsState } from "./types";

export const initialSettingsState: T_SettingsState = {
    duration: 60,
    pointsToWin: 100
}

export function settingsReducer(state: T_SettingsState = initialSettingsState, action: T_SettingsActions): T_SettingsState {
    switch (action.type) {
        case SET_SETTINGS_OPTIONS:
            return {
                ...state,
                ...action.payload.options
            }
        default:
            return state
    }
}

export default settingsReducer