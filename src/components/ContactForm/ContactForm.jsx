import { Formik } from 'formik';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
// import { addContact } from '../redux/contacts/contacts-operations';
import * as Yup from 'yup';

import { addContact, getContactsValue } from 'redux/phonebookSlice';
import { nanoidUA } from 'components/additions/nanoidUA';

import {
  Button,
  FormStyle,
  Label,
  Span,
  Input,
  InputMask,
  Error,
} from './ContactForm.styled';

const Schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: Yup.string()
    .min(4)
    .max(12)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContactsValue);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();

    const { name, number } = values;

    const contact = {
      name,
      number,
    };

    const dublicateContact = findDublicateContact(contact, contacts);

    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addContact({ ...values, id: nanoid() }));
  };

  const findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={Schema}
    >
      <FormStyle>
        <Label>
          <Span>Name</Span>
          <Input
            type="text"
            name="name"
            placeholder="Enter your first and second name"
            required
          />
          <Error component="span" name="name" />
        </Label>

        <Label>
          <Span>Number</Span>
          <InputMask
            type="tel"
            name="number"
            placeholder="Enter a phone number"
            // placeholder="+38 (0__) ___-____"
            required
          />
          <Error component="span" name="number" />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormStyle>
    </Formik>
  );
};
