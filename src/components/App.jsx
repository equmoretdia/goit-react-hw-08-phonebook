import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './Layout';
import { Home } from '../pages/Home';
import { Contacts } from '../pages/Contacts';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

// const Home = lazy(() => import('../pages/Home'));
// const Contacts = lazy(() => import('../pages/Contacts'));
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
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
