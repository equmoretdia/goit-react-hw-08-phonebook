import ContactAdd from '../components/ContactAdd';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import css from './Contacts.module.css';

export const Contacts = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Contacts</h1>
      <div className={css.container}>
        <div className={css.service}>
          <ContactAdd />
          <Filter />
        </div>
        <ContactList />
      </div>
    </section>
  );
};
