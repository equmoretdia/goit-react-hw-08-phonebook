import ContactAdd from '../components/ContactAdd';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import { Section, Wrapper, Container, Title } from './ContactsStyles';

const Contacts = () => {
  return (
    <Section>
      <Title>Contacts</Title>
      <Wrapper>
        <Container>
          <ContactAdd />
          <Filter />
        </Container>
        <ContactList />
      </Wrapper>
    </Section>
  );
};

export default Contacts;
