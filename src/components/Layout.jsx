import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './AppBar';
import Loader from './Loader';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
