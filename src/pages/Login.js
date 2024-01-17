import css from './Login.module.css';

export const Login = () => {
  return (
    <div>
      <h1 className={css.title}>Login page</h1>

      <form className={css.form}>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>

        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
