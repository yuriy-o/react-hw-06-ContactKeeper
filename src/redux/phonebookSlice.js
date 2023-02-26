import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import initialContacts from '../components/additions/initialContacts.json';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: initialContacts,
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const phonebookReducer = persistReducer(persistConfig, phonebookSlice.reducer);

export const { addContact, removeContact, filterChange } =
  phonebookSlice.actions;



export default phonebookReducer;
