import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { logIn } from '../../redux/auth/operations';

import { Form, Label, Input, Button } from './LoginFormStyles';

const LoginForm = () => {
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
      toast.success('Welcome! You have been logged in successfully', {
        position: 'top-right',
        theme: 'colored',
      });
      formReset();
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginForm;
