import React, { FC, useMemo, useRef, useState } from 'react'
import Timer from './Timer'
import './game.css'
import { WORDS } from '../../constants/words'
import { getShuffledArr } from '../../helpers/random'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CurrentTurnInfo from './CurrentTurnInfo'
import { setCurrentPage } from '../../store/app/actionCreators'
import { PAGES } from '../../constants/app'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { setTeamOptions } from '../../store/teams/actionCreators'
import { selectCurrentTurnMemberId } from '../../store/app/selectors'
import { selectTeamIds, selectTeams } from '../../store/teams/selectors'

const Game: FC<{}> = () => {

  const dispatch = useDispatch()
  const currentTurnMemberId = useSelector(selectCurrentTurnMemberId)
  const teams = useSelector(selectTeams)
  const teamIds = useSelector(selectTeamIds, shallowEqual)
  const currentTurnTeamId = useMemo(() => {
    return teamIds.find(teamId => teams[teamId].memberIds.includes(currentTurnMemberId))
  }, [teamIds, currentTurnMemberId])
  const [ collection, setCollection ] = useState(getShuffledArr(WORDS.react))
  const [ step, setStep ] = useState(0)
  const checkedCountRef = useRef(0)

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setCollection(prev => prev.map((subCollection, i) => {
      const { id } = e.currentTarget
      if(i !== step) return subCollection
      
      return subCollection.map(word => {
        if(word.value !== id) return word
        
        const newSelectedStatus = !prev[step].find(word => word.value === id)?.selected
        newSelectedStatus ? checkedCountRef.current++ : checkedCountRef.current--
        
        return {
          ...word,
          selected: newSelectedStatus
        }
      })
    }))
    
    if(
      checkedCountRef.current &&
      checkedCountRef.current / collection[step].length === step + 1
    ) {
      if(!collection[step + 1]) {
        dispatch(setTeamOptions({
          id: currentTurnTeamId ?? '',
          points: teams[currentTurnTeamId ?? ''].points + checkedCountRef.current
        }))
        dispatch(setCurrentPage(PAGES.result))
        return
      }
      setStep(prev => prev + 1)
    }
  }

  return (
    <div className='game-wrapper'>
      <CurrentTurnInfo />
      <Timer />
      <List>
        {
          collection[step].map(word => (
            <ListItem key={word.value} divider disablePadding>
              <ListItemButton onClick={handleClick} id={word.value}>
                <ListItemText primary={word.value} />
                  {
                    word.selected &&
                    <ListItemIcon>
                      <CheckIcon color='success' />
                    </ListItemIcon>
                  }
                </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

export default Game