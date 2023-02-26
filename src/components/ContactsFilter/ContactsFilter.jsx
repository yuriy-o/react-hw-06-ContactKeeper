import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/phonebookSlice';
import { selectFilter } from 'redux/selectors';
import { Input, Label, Text } from './ContactsFilter.styled';

export const ContactsFilter = React.memo(() => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = useCallback(
    e => {
      dispatch(filterChange(e.currentTarget.value));
    },
    [dispatch]
  );

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
});
