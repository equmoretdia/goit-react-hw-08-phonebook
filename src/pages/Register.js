export const Register = () => {
  return (
    <div>
      <h1>Registration page</h1>

      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>

        <label>
          Email
          <input type="email" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
