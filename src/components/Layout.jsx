import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './AppBar';
import Loader from './Loader';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense
          fallback={
            <Loader
              height={'90'}
              width={'90'}
              colors={['#383848', '#383848']}
              size={'l'}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
