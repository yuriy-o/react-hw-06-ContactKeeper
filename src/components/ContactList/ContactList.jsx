import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/phonebookSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

import { Button, Li } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  // const getRequiredCard = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  // const deleteCard = contactId => {
  //   dispatch(removeContact(contactId));
  // };

  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  // const cards = getRequiredCard();

  return (
    <ol>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ol>
  );
};

const Contact = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <Li>
      {name}: {number}
      <Button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </Button>
    </Li>
  );
};
