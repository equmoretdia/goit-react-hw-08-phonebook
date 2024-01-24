import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Loader';
import { logOut } from '../../redux/auth/operations';
import { selectUser, selectIsLoggingOut } from '../../redux/auth/selectors';
import defaultAvatar from '../../img/auth/default-avatar.png';

import { Container, Avatar, Name, Button } from './UserMenuStyles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggingOut = useSelector(selectIsLoggingOut);

  return (
    <Container>
      <Avatar
        src={defaultAvatar}
        alt="funny smiling penguin avatar"
        width="38"
      />
      <Name>Welcome, {user.name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        {isLoggingOut ? (
          <Loader
            height={'16'}
            width={'16'}
            colors={['#383848', '#383848']}
            size={'s'}
          />
        ) : (
          'Quit'
        )}
      </Button>
    </Container>
  );
};

export default UserMenu;
