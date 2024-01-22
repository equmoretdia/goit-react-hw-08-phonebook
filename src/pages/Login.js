import LoginForm from '../components/LoginForm';

import css from './Login.module.css';

export const Login = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Login page</h1>
      <LoginForm />
    </div>
  );
};
