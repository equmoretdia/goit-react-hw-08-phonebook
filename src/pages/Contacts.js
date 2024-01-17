import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import css from './App.module.css';

export const Contacts = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};
