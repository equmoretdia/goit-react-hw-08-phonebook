import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const Navigation = () => (
  <ul className={css.list}>
    <li>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
