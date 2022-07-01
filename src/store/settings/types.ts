import { SET_SETTINGS_OPTIONS } from "./actionTypes"

export type T_SettingsState = {
    duration: number
    pointsToWin: number
}

export type T_SetSettingsOptions = (options: T_SettingsState) => {
    type: typeof SET_SETTINGS_OPTIONS,
    payload: {
        options: Partial<T_SettingsState>
    }
}

export type T_SettingsActions = ReturnType<T_SetSettingsOptions>