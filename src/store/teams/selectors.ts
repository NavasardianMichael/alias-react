import { G_Selector } from "../../helpers/types";
import { T_TeamsState } from "./types";

export const selectTeams: G_Selector<T_TeamsState['byId']> = (state) => state.teams.byId

export const selectTeamIds: G_Selector<T_TeamsState['allIds']> = (state) => state.teams.allIds