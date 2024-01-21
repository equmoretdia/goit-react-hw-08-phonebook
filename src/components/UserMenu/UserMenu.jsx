import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import defaultAvatar from '../../img/auth/default-avatar.png';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <img
        src={defaultAvatar}
        alt="funny smiling penguin avatar"
        width="38"
        className={css.avatar}
      />
      <span className={css.name}>Welcome, {user.name}</span>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Quit
      </button>
    </div>
  );
};

export default UserMenu;
