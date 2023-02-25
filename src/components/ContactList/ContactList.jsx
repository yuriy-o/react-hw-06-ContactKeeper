import PropTypes from 'prop-types';

import { Button, Li } from './ContactList.styled';

export const ContactList = ({ removeContact, contacts }) => {
  const contactItems = contacts.map(({ id, name, number }) => (
    <Li key={id}>
      {name}: {number}
      <Button onClick={() => removeContact(id)} type="button">
        Delete
      </Button>
    </Li>
  ));

  return <ol>{contactItems}</ol>;
};

//! якщо в пропси передається МАСИВ, то пишемо дефолтні пропси
ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired, //! або/та number
    })
  ),
};
