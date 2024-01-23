import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteContact } from '../../redux/contacts & filter/operations';
import { selectDeletedContactId } from '../../redux/contacts & filter/selectors';
import ContactUpdate from 'components/ContactUpdate';
import Loader from '../Loader';
import Modal from '../Modal';

import { Item, ButtonGroup, Button } from './ContactItemStyles';

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
      <Item>
        <p>
          {name}: {number}
        </p>
        <ButtonGroup>
          <Button type="button" onClick={toggleModal}>
            Update
          </Button>
          <Button type="button" onClick={handleContactDeletion}>
            {deletedContactId === id ? (
              <Loader
                height={'16'}
                width={'16'}
                colors={['#e3e3ee', '#e3e3ee']}
                size={'s'}
              />
            ) : (
              'Delete'
            )}
          </Button>
        </ButtonGroup>
      </Item>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactUpdate
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
