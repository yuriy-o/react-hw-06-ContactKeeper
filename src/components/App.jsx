import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';

import { Container, H1, H2, Warning } from './App.styled';

const LOCAL_STORAGE = JSON.parse(window.localStorage.getItem('contacts'));

export const App = () => {
  const [contacts, setContacts] = useState(LOCAL_STORAGE);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleInputChange = e => {
    setFilter(e.target.value);
  };

  const filterContactByName = () => {
    //! якщо фільтр пустий, то відразу показуємо контакти
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const isContacts = Boolean(contacts.length);

  return (
    <Container>
      <H1>Phonebook</H1>
      <ContactForm />
      <H2>Contacts</H2>
      <ContactsFilter handleInputChange={handleInputChange} />
      <ContactList />
    </Container>
  );
};
