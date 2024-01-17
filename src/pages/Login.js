export const Login = () => {
  return (
    <div>
      <h1>Login page</h1>

      <form>
        <label>
          Email
          <input type="email" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
