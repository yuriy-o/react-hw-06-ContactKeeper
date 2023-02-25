import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { nanoidUA } from './additions/nanoidUA';

import { Container, H1, H2, Warning } from './App.styled';

const LOCAL_STORAGE = JSON.parse(window.localStorage.getItem('contacts'));

export const App = ({ initialContacts }) => {
  const [contacts, setContacts] = useState(LOCAL_STORAGE ?? initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //! (addContact)
  const formHandleSubmit = (values, { resetForm }) => {
    resetForm();

    const { name, number } = values;
    const contact = { name, number };

    const dublicateContact = findDublicateContact(contact, contacts);

    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : setContacts([...contacts, { ...values, id: nanoidUA() }]);
  };

  //! Функція перевірки імені перед додаванням з урахуванням регистру
  const findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

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
      <ContactForm onSubmitForm={formHandleSubmit} />

      <H2>Contacts</H2>
      <ContactsFilter handleInputChange={handleInputChange} />

      {isContacts && (
        <ContactList
          removeContact={removeContact}
          contacts={filterContactByName()}
        />
      )}
      {!isContacts && <Warning>No contacts in the list</Warning>}
    </Container>
  );
};
