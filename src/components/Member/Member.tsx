import { FC } from 'react';
import { InputBase, List, ListItem } from '@mui/material';
import { shallowEqual, useSelector } from 'react-redux';
import { selectAllMemberIdsByTeamId, selectMembersByTeamId } from '../../store/members/selectors';
import { T_Team } from '../../store/teams/types';

type T_Props = {
  teamId: T_Team['id']
}

const Member: FC<T_Props> = ({ teamId }) => {

  const members = useSelector(selectMembersByTeamId(teamId))
  const memberIds = useSelector(selectAllMemberIdsByTeamId(teamId), shallowEqual)

  return (
    <List>
      {
        memberIds.map(id => (
          <>
            <ListItem disablePadding>
              <InputBase
                placeholder="Type team name"
                value={members[id].name}
              />
            </ListItem>
          </>
        ))
      }
    </List>
  );
}

export default Member