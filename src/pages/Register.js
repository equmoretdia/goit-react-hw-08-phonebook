import css from './Register.module.css';

export const Register = () => {
  return (
    <div>
      <h1 className={css.title}>Registration page</h1>

      <form className={css.form}>
        <label className={css.label}>
          Name
          <input type="text" name="name" />
        </label>

        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>

        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
