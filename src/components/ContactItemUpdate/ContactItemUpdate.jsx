import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { updateContact } from '../../redux/contacts & filter/operations';
import { selectUpdateContactIsLoading } from '../../redux/contacts & filter/selectors';
import LoaderInButton from '../LoaderInButton';

import css from './ContactItemUpdate.module.css';

const ContactItemUpdate = ({
  contactId,
  currentName,
  currentNumber,
  onSave,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUpdateContactIsLoading);
  const [state, setState] = useState({
    id: contactId,
    name: currentName,
    number: currentNumber,
  });
  const { id, name, number } = state;
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
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label} htmlFor="">
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={css.button} type="submit">
        {isLoading ? <LoaderInButton /> : 'Update contact'}
      </button>
    </form>
  );
};

ContactItemUpdate.propTypes = {
  contactId: PropTypes.string.isRequired,
  currentName: PropTypes.string.isRequired,
  currentNumber: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ContactItemUpdate;
