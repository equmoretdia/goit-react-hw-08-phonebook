import Navigation from './Navigation';
import AuthNav from './AuthNav';

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
