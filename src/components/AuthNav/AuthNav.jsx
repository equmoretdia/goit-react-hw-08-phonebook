import React from 'react';
import { NavMenu, NavMenuItem } from './AuthNavStyles';

const AuthNav = () => (
  <NavMenu>
    <NavMenuItem to="/login">Login</NavMenuItem>
    <NavMenuItem to="/register">Register</NavMenuItem>
  </NavMenu>
);

export default AuthNav;
