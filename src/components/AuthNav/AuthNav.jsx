import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <ul>
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
    <li>
      <NavLink to="/register">Register</NavLink>
    </li>
  </ul>
);

export default AuthNav;
