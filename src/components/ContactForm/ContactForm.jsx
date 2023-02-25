import PropTypes from 'prop-types';
import { Formik } from 'formik';
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

export const ContactForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitForm}
      validationSchema={SignupSchema}
    >
      <FormStyle>
        <Label>
          <Span>Name</Span>
          <Input
            name="name"
            type="text"
            placeholder="Enter your first and second name"
            required
          />
          <Error component="span" name="name" />
        </Label>

        <Label>
          <Span>Number</Span>
          <InputMask
            name="number"
            type="tel"
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

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
