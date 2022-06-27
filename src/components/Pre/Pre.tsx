import React, { FC } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import { InputBase } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTeamIds, selectTeams } from '../../store/teams/selectors';

const Pre: FC<{}> = ({}) => {

  const teams = useSelector(selectTeams)
  const teamIds = useSelector(selectTeamIds)

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
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
          <>
            <ListItemButton onClick={handleClick}>
              <InputBase
                placeholder="Type team name"
                value={teams[id].name}
              />
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemIcon>
                <GroupRemoveIcon />
              </ListItemIcon>
            </ListItemButton>
          </>
        ))
      }
    </List>
  );
}

export default Pre