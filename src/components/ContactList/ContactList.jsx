import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/phonebookSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

import { Button, GridWrapper, Li, Name, Number } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

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
      <GridWrapper>
        <Name>{name}:</Name>
        <Number>{number}</Number>
      </GridWrapper>

      <Button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </Button>
    </Li>
  );
};
