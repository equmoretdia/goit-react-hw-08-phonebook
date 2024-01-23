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

import { Wrapper } from './ContactListStyles';

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
      <Wrapper>
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
      </Wrapper>
    </>
  );
};

export default ContactList;
