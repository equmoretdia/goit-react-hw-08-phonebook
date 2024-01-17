import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/contacts">Contacts</NavLink>
    </li>
  </ul>
);

export default Navigation;
