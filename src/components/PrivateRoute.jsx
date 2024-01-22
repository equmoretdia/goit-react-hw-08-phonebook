import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectIsFetching } from '../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetching = useSelector(selectIsFetching);
  const shouldRedirect = !isLoggedIn && !isFetching;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
