import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { logIn } from '../redux/auth/operations';

import css from './Login.module.css';

export const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;

  const handleSubmit = e => {
    e.preventDefault();
    handleLogIn();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const formReset = () => {
    setState({ email: '', password: '' });
  };

  const handleLogIn = async () => {
    try {
      await dispatch(logIn(state));
      toast.success('You have been logged in successfully', {
        position: 'top-right',
        theme: 'colored',
      });
      formReset();
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <div>
      <h1 className={css.title}>Login page</h1>

      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
