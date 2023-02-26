import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';

import { Container, H1, H2 } from './App.styled';

export const App = () => {
  return (
    <Container>
      <H1>Phonebook</H1>
      <ContactForm />
      <H2>Contacts</H2>
      <ContactsFilter />
      <ContactList />
    </Container>
  );
};
