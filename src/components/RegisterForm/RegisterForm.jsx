import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

import Loader from '../Loader';
import { register } from '../../redux/auth/operations';
import { selectIsRegistering } from '../../redux/auth/selectors';

import { Form, Label, Input, Button } from './RegisterFormStyles';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isRegistering = useSelector(selectIsRegistering);
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

  // const formReset = () => {
  //   setState({ name: '', email: '', password: '' });
  // };

  const handleRegistration = async () => {
    try {
      await dispatch(register(state));
      // toast.success(`New user "${name}" has been registered successfully`, {
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
        Name
        <Input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
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
        {isRegistering ? (
          <Loader
            height={'16'}
            width={'16'}
            colors={['#e3e3ee', '#e3e3ee']}
            size={'s'}
          />
        ) : (
          'Register'
        )}
      </Button>
    </Form>
  );
};

export default RegisterForm;
