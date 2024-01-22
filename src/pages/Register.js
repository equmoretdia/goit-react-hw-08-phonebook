import RegisterForm from '../components/RegisterForm';

import css from './Register.module.css';

const Register = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Registration page</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
