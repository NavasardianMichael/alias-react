import { T_Team } from "../store/teams/types";
import { D_MEMBER_1, D_MEMBER_2, D_MEMBER_3, D_MEMBER_4 } from "./members";

export const D_TEAM_1: T_Team = {
    id: 'Team 1 demo id',
    name: 'Team 1',
    points: 0,
    memberIds: [D_MEMBER_1.id, D_MEMBER_2.id]
}

export const D_TEAM_2: T_Team = {
    id: 'Team 2 demo id',
    name: 'Team 2',
    points: 0,
    memberIds: [D_MEMBER_3.id, D_MEMBER_4.id]
}