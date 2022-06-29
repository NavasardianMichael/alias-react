import { FC, useState } from 'react'
import Timer from './Timer'
import './game.css'
import { WORDS } from '../../constants/words'
import { getShuffledArr } from '../../helpers/random'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const Game: FC<{}> = () => {

  const [ collection, setCollection ] = useState(getShuffledArr(WORDS.react))
  const [ step, setStep ] = useState(0)

  const handleClick = () => {
    console.log('Clicked!');
  }

  return (
    <div className='game-wrapper'>
      <Timer />
      <List>
        {
          collection[step].map(word => (
            <ListItem key={word.value} divider disablePadding>
              <ListItemButton onClick={handleClick}>
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
