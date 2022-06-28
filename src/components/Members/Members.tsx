import { InputBase, List, ListItemButton } from '@mui/material';
import { FC, Fragment, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMemberOptions } from '../../store/members/actionCreators';
import { selectMembers } from '../../store/members/selectors';
import { T_Team } from '../../store/teams/types';

type T_Props = {
  memberIds: T_Team['memberIds']
  setIsBlank: React.Dispatch<React.SetStateAction<boolean>>
}

const Member: FC<T_Props> = ({ memberIds, setIsBlank }) => {

  const members = useSelector(selectMembers)
  const dispatch = useDispatch()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, id } =  e.target
    setIsBlank(!value)
    dispatch(setMemberOptions({
      id,
      name: value
    }))
  }

  return (
    <List style={{marginLeft: 32}}>
      {
        memberIds.map(id => (
          <Fragment key={id}>
            <ListItemButton divider>
              <InputBase
                fullWidth
                placeholder="Type Member Name"
                id={id}
                value={members[id].name}
                onChange={handleChange}
              />
            </ListItemButton>
          </Fragment>
        ))
      }
    </List>
  );
}

export default memo(Member)