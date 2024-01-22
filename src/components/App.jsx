import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchCurrentUser } from '../redux/auth/operations';
import { selectIsFetching } from '../redux/auth/selectors';

import Layout from './Layout';
import Loader from './Loader';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
// import Home from '../pages/Home';
// import Contacts from '../pages/Contacts';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsFetching);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetching ? (
    <Loader
      height={'90'}
      width={'90'}
      colors={['#383848', '#383848']}
      size={'l'}
    />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo={'/login'} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={<Login />} redirectTo={'/contacts'} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo={'/contacts'}
              />
            }
          />
        </Route>
        {/* Default route for non-existent URLs */}
        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default App;
