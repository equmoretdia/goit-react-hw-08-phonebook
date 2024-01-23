import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
`;

const NavMenuItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #e3e3ee;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.05);
  }

  &.active {
    transform: scale(1.05);
    text-decoration: underline;
  }
`;

export { NavMenu, NavMenuItem };
