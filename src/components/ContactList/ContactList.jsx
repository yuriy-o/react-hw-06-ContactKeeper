import { useSelector, useDispatch } from 'react-redux';
import { getContactsValue, removeContact } from 'redux/phonebookSlice';

import { Button, Li } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(getContactsValue);

  const getRequiredCard = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteCard = contactId => {
    dispatch(removeContact(contactId));
  };

  const cards = getRequiredCard();

  return (
    <ol>
      {cards.map(({ id, name, number }) => (
        <Li key={id}>
          {name}: {number}
          <Button onClick={() => deleteCard(id)} type="button">
            Delete
          </Button>
        </Li>
      ))}
    </ol>
  );
};
