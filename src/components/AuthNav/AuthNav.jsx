import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

const AuthNav = () => (
  <ul className={css.list}>
    <li>
      <NavLink className={css.link} to="/login">
        Login
      </NavLink>
    </li>
    <li>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
