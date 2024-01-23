import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavMenu, NavMenuItem } from './NavigationStyles';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavMenu>
      <NavMenuItem to="/">Home</NavMenuItem>
      {isLoggedIn && <NavMenuItem to="/contacts">Contacts</NavMenuItem>}
    </NavMenu>
  );
};

export default Navigation;
