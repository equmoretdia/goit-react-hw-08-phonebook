import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = state;

  const handleSubmit = e => {
    e.preventDefault();
    handleRegistration();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const formReset = () => {
    setState({ name: '', email: '', password: '' });
  };

  const handleRegistration = async () => {
    try {
      await dispatch(register(state));
      toast.success(`New user "${name}" has been registered successfully`, {
        position: 'top-right',
        theme: 'colored',
      });
      formReset();
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={css.label}>
        Email
        <input
          className={css.input}
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
          className={css.input}
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
      </label>

      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
