import { FC, useRef, useState } from 'react'
import Timer from './Timer'
import './game.css'
import { WORDS } from '../../constants/words'
import { getShuffledArr } from '../../helpers/random'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { PAGES } from '../../constants/view'
import { setCurrentPage } from '../../store/view/actionCreators'
import { useDispatch } from 'react-redux'

const Game: FC<{}> = () => {

  const dispatch = useDispatch()
  const [ collection, setCollection ] = useState(getShuffledArr(WORDS.react))
  const [ step, setStep ] = useState(0)
  const checkedCountRef = useRef(0)

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setCollection(prev => prev.map((subCollection, i) => {
      const { id } = e.currentTarget
      if(i !== step) return subCollection
      return subCollection.map(word => {
        if(word.value !== id) return word
        return {
          ...word,
          selected: !prev[step].find(word => word.value === id)?.selected
        }
      })
    }))

    checkedCountRef.current++
    if(
      checkedCountRef.current &&
      checkedCountRef.current % collection[step].length === 0
    ) {
      if(!collection[step + 1]) return dispatch(setCurrentPage(PAGES.result))
      setStep(prev => prev + 1)
    }
  }

  return (
    <div className='game-wrapper'>
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
