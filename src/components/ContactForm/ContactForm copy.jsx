import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import * as Yup from 'yup';

import {
  Button,
  FormStyle,
  Label,
  Span,
  Input,
  InputMask,
  Error,
} from './ContactForm.styled';
import { nanoidUA } from 'components/additions/nanoidUA';

const SignupSchema = Yup.object().shape({
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

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const nameInputId = nanoidUA();
  const numberInputId = nanoidUA();

  const handleFormSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number });
    reset();
  };

  const addNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoidUA(),
      name: name.trim(),
      number: number.trim(),
    };

    const contactCheck = contacts.find(contact => {
      return contact.name === newContact.name;
    });

    contactCheck
      ? alert(`${name} is already in the contacts`)
      : dispatch(addContact(newContact));
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <Formik
      action=""
      // initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={SignupSchema}
    >
      <FormStyle>
        <Label htmlFor={nameInputId}>
          <Span>Name</Span>
          <Input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            placeholder="Enter your first and second name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Error component="span" name="name" />
        </Label>

        <Label htmlFor={numberInputId}>
          <Span>Number</Span>
          <InputMask
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            placeholder="Enter a phone number"
            // placeholder="+38 (0__) ___-____"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Error component="span" name="number" />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormStyle>
    </Formik>
  );
};
