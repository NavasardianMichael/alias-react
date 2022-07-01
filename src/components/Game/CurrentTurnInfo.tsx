import React, { FC, memo } from 'react'
import { Breadcrumbs } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectCurrentTurnMemberId } from '../../store/app/selectors'
import { selectTeams } from '../../store/teams/selectors'
import { selectMembers } from '../../store/members/selectors'

type T_Props = {}

const CurrentTurnInfo: FC<T_Props> = () => {

  const currentTurnMemberId = useSelector(selectCurrentTurnMemberId)
  const teams = useSelector(selectTeams)
  const members = useSelector(selectMembers)

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" className='current-turn-info'>
        <span>
          { teams[members[currentTurnMemberId].teamId].name }
        </span>
        <span>
          { members[currentTurnMemberId].name }
        </span>
    </Breadcrumbs>
  )
}

export default memo(CurrentTurnInfo)