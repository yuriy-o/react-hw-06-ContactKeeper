import PropTypes from 'prop-types';
import { Input, Label, Text } from './ContactsFilter.styled';

export const ContactsFilter = ({ handleInputChange }) => {
  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter a name to search for"
        name="filter"
        required
      />
    </Label>
  );
};

ContactsFilter.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};
