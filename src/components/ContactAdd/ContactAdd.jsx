import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from '../../redux/contacts & filter/operations';
import {
  selectItems,
  selectAddContactIsLoading,
} from '../../redux/contacts & filter/selectors';
import ContactForm from '../ContactForm';

const ContactAdd = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectAddContactIsLoading);
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;
  const buttonText = 'Add contact';

  const handleSubmit = e => {
    e.preventDefault();
    if (
      items.some(
        contact => contact.name.toLowerCase() === name.toLowerCase().trim()
      )
    ) {
      toast.warn(`${name} is already in your contacts`, {
        position: 'top-right',
        theme: 'colored',
      });
    } else if (items.some(contact => contact.number === number.trim())) {
      toast.warn(`${number} is already in your contacts`, {
        position: 'top-right',
        theme: 'colored',
      });
    } else {
      handleContactAddition();
    }
  };

  const formReset = () => {
    setState({ name: '', number: '' });
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleContactAddition = async () => {
    try {
      await dispatch(addContact(state));
      toast.success(`New contact "${name}" has been added successfully`, {
        position: 'top-right',
        theme: 'colored',
      });
      formReset();
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <ContactForm
      name={name}
      number={number}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={buttonText}
    />
  );
};

export default ContactAdd;
