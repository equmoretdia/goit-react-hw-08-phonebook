import Navigation from '../Navigation';
import AuthNav from '../AuthNav';

import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
