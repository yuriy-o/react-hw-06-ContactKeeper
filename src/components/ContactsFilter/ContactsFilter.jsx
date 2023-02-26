import { useDispatch, useSelector } from 'react-redux';
import { filterChange, getContactsValue } from 'redux/phonebookSlice';
import { Input, Label, Text } from './ContactsFilter.styled';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(getContactsValue);

  const onFilterChange = e => {
    dispatch(filterChange(e.currentTarget.value));
  };

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Enter a name to search for"
        required
      />
    </Label>
  );
};
