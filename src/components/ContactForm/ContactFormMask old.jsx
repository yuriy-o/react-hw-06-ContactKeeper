import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  FormStyle,
  Label,
  Span,
  Input,
  InputMask,
} from './ContactForm.styled';

export class ContactFormMask extends Component {
  state = {
    name: '',
    number: '',
  };

  //! Записує данні з інпуту в STATE
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  //! (addContact)
  handleSubmit = e => {
    e.preventDefault();

    // this.props.onSubmitForm(this.state); //? Короткий запис без умови, ↓↓↓ або ↓↓↓

    //?  Забираємо onSubmitForm з this.props
    const { onSubmitForm } = this.props;
    //? передаємо onSubmitForm на гору в стейт
    const result = onSubmitForm({ ...this.state });

    if (!result) {
      this.reset();
    }
  };

  //! Очищення форми після submit
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, number } = this.state;

    return (
      <FormStyle onSubmit={handleSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your first and second name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          <Span>Number</Span>
          <InputMask
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            // placeholder="Enter a phone number"
            placeholder="+38 (0__) ___-____"
            mask={[
              '+',
              '3',
              '8',
              ' ',
              '(',
              '0',
              /[1-9]/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            guide={true}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormStyle>
    );
  }
}

//! ВИДАЄ ПОМИЛКУ ЯКЩО .isRequired
ContactFormMask.propTypes = {
  onSubmit: PropTypes.func,
};
