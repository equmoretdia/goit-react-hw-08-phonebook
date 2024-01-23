import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import defaultAvatar from '../../img/auth/default-avatar.png';

import { Container, Avatar, Name, Button } from './UserMenuStyles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Container>
      <Avatar
        src={defaultAvatar}
        alt="funny smiling penguin avatar"
        width="38"
      />
      <Name>Welcome, {user.name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Quit
      </Button>
    </Container>
  );
};

export default UserMenu;
