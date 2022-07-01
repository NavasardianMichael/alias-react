import { G_Selector } from "../../helpers/types";
import { T_SettingsState } from "./types";

export const selectDuration: G_Selector<T_SettingsState['duration']> = (state)  => state.settings.duration