import RegisterForm from '../components/RegisterForm';

import css from './Login&Register.module.css';

export const Register = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Registration page</h1>
      <RegisterForm />
    </div>
  );
};
