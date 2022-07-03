import { Breadcrumbs, Button } from "@mui/material";
import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, PAGES } from "../../constants/app";
import { setCurrentPage, setCurrentTurnMemberId } from "../../store/app/actionCreators";
import { selectCurrentTurnMemberId, selectMembersSequenceIds } from "../../store/app/selectors";
import { selectMemberIds, selectMembers } from "../../store/members/selectors";
import { selectTeamIds, selectTeams } from "../../store/teams/selectors";

const Result: FC<{}> = () => {

  const dispatch = useDispatch()
  const teams = useSelector(selectTeams)
  const teamIds = useSelector(selectTeamIds)
  const memberIds = useSelector(selectMemberIds)
  const membersSequenceIds = useSelector(selectMembersSequenceIds)
  const currentTurnMemberId = useSelector(selectCurrentTurnMemberId)

  const handleClick = () => {
    
    const nextMemberIndex = membersSequenceIds.indexOf(currentTurnMemberId) + 1
    const nextMemberId = membersSequenceIds[memberIds[nextMemberIndex] ? nextMemberIndex : 0]

    dispatch(setCurrentTurnMemberId(nextMemberId))
    dispatch(setCurrentPage(PAGES.game))
  }

  return (
    <>
      <h1 className='text-center my-4'>The current round is end</h1>
      {
        teamIds.map(teamId => (
          <Breadcrumbs key={`poinst-info-${teamId}`} separator="-" aria-label="breadcrumb" className='current-turn-info'>
            <span>
              { teams[teamId].name }
            </span>
            <span>
              { teams[teamId].points }
            </span>
          </Breadcrumbs>
        ))
      }
      <Button
        fullWidth 
        style={{backgroundColor: COLORS.secondary, color: COLORS.primary}}
        onClick={handleClick}
      >
        Next Round
      </Button>
    </>
  );
};

export default memo(Result);
