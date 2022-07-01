import React, { FC, Fragment, useState } from 'react';
import { Button, InputBase } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setTeamOptions } from '../../store/teams/actionCreators';
import { selectTeamIds, selectTeams } from '../../store/teams/selectors';
import Members from './Members/Members';
import './pre.css';
import { COLORS, PAGES } from '../../constants/app';
import { setCurrentPage } from '../../store/app/actionCreators';

const Pre: FC<{}> = ({}) => {

  const dispatch = useDispatch()
  const [ isBlank, setIsBlank ] = useState(false)
  const teams = useSelector(selectTeams)
  const teamIds = useSelector(selectTeamIds, shallowEqual)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, id } =  e.target
    setIsBlank(!value)
    
    dispatch(setTeamOptions({
      id,
      name: value
    }))
  }

  const handleClick = () => {
    dispatch(setCurrentPage(PAGES.game))
  }

  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Form the teams
          </ListSubheader>
        }
      >
        {
          teamIds.map(id => (
            <Fragment key={id}>
              <ListItemButton divider>
                <InputBase
                  placeholder="Type Team Name"
                  id={id}
                  fullWidth
                  value={teams[id].name}
                  onChange={handleChange}
                />

              </ListItemButton>
              <Members 
                memberIds={teams[id].memberIds}
                setIsBlank={setIsBlank} 
              />
            </Fragment>
          ))
        }
      </List>
      <div className='d-block text-center p-3'>
        <Button
          fullWidth
          style={{backgroundColor: COLORS.secondary, color: COLORS.primary}}
          onClick={handleClick}
          disabled={isBlank}
        >
          Play
        </Button>
      </div>
    </>
  );
}

export default Pre