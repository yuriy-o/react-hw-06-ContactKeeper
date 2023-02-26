import { Field, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
// import InputMask from 'react-input-mask';
import ReactInputMask from 'react-input-mask';

import { addContact } from 'redux/phonebookSlice';
import { selectContacts } from 'redux/selectors';
import { nanoidUA } from 'components/additions/nanoidUA';

import {
  Button,
  FormStyle,
  Label,
  Span,
  Input,
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
    // .min(1)
    // .max(4)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
      : dispatch(addContact({ ...values, id: nanoidUA() }));
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
      <FormStyle autoComplete="off">
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
          <Field name="number" required>
            {({ field }) => (
              <ReactInputMask
                {...field}
                mask="+38 (099) 999-9999"
                maskchar="_"
                style={{
                  marginBottom: 10,
                  width: '97%',
                  height: 30,
                  fontSize: 20,

                  '::placeholder': {
                    fontSize: 14,
                    fontStyle: 'italic',
                  },
                }}
              />
            )}
          </Field>

          <Error component="span" name="number" />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormStyle>
    </Formik>
  );
};
