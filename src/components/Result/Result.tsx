import { Button } from "@mui/material";
import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, PAGES } from "../../constants/app";
import { setCurrentPage, setCurrentTurnMemberId } from "../../store/app/actionCreators";
import { selectCurrentTurnMemberId, selectMembersSequenceIds } from "../../store/app/selectors";
import { selectMemberIds, selectMembers } from "../../store/members/selectors";

const Result: FC<{}> = () => {

  const dispatch = useDispatch()
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
