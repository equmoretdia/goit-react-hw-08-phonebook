import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectFetchContactsIsLoading,
  selectError,
  selectFilteredContacts,
} from '../../redux/contacts & filter/selectors';
import { fetchContacts } from '../../redux/contacts & filter/operations';
import ContactItem from '../ContactItem';
import Loader from '../Loader';

import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectFetchContactsIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={css.wrapper}>
        {isLoading && !error && (
          <Loader
            height={'60'}
            width={'60'}
            colors={['#383848', '#383848']}
            size={'m'}
          />
        )}
        {filteredContacts.length > 0 &&
          filteredContacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
