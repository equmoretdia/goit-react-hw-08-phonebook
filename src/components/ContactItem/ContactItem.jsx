import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteContact } from '../../redux/contacts & filter/operations';
import { selectDeletedContactId } from '../../redux/contacts & filter/selectors';
import ContactItemUpdate from 'components/ContactItemUpdate';
import LoaderInButton from '../LoaderInButton';
import Modal from '../Modal';

import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deletedContactId = useSelector(selectDeletedContactId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  const handleContactDeletion = async () => {
    try {
      await dispatch(deleteContact(id));
      toast.success(`Contact "${name}" has been deleted successfully`, {
        position: 'top-right',
        theme: 'colored',
      });
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  return (
    <>
      <li className={css.item}>
        <p>
          {name}: {number}
        </p>
        <div className={css.buttons}>
          <button className={css.button} type="button" onClick={toggleModal}>
            Update
          </button>
          <button
            className={css.button}
            type="button"
            onClick={handleContactDeletion}
          >
            {deletedContactId === id ? <LoaderInButton /> : 'Delete'}
          </button>
        </div>
      </li>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactItemUpdate
            contactId={id}
            currentName={name}
            currentNumber={number}
            onSave={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
