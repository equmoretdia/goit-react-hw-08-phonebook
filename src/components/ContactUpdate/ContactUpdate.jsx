import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { updateContact } from '../../redux/contacts & filter/operations';
import { selectUpdateContactIsLoading } from '../../redux/contacts & filter/selectors';
import ContactForm from '../ContactForm';

const ContactUpdate = ({ contactId, currentName, currentNumber, onSave }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUpdateContactIsLoading);
  const [state, setState] = useState({
    id: contactId,
    name: currentName,
    number: currentNumber,
  });
  const { id, name, number } = state;
  const buttonText = 'Update contact';
  console.log(id);

  const handleSubmit = e => {
    e.preventDefault();
    handleContactUpdate();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleContactUpdate = async () => {
    try {
      await dispatch(updateContact(state));
      toast.success(`Contact "${name}" has been updated successfully`, {
        position: 'top-right',
        theme: 'colored',
      });
      onSave();
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

ContactUpdate.propTypes = {
  contactId: PropTypes.string.isRequired,
  currentName: PropTypes.string.isRequired,
  currentNumber: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ContactUpdate;
