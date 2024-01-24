import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

import Loader from '../Loader';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoggingIn } from '../../redux/auth/selectors';

import { Form, Label, Input, Button } from './LoginFormStyles';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggingIn = useSelector(selectIsLoggingIn);
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

  // const formReset = () => {
  //   setState({ email: '', password: '' });
  // };

  const handleLogIn = async () => {
    try {
      await dispatch(logIn(state));
      // toast.success('Welcome! You have been logged in successfully', {
      //   position: 'top-right',
      //   theme: 'colored',
      // });
      // formReset();
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
      <Button type="submit">
        {isLoggingIn ? (
          <Loader
            height={'16'}
            width={'16'}
            colors={['#e3e3ee', '#e3e3ee']}
            size={'s'}
          />
        ) : (
          'Log In'
        )}
      </Button>
    </Form>
  );
};

export default LoginForm;
