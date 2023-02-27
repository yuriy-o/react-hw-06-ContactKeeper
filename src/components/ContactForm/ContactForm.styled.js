import styled from 'styled-components';
// import MaskedInput from 'react-text-mask';
import { Form, Field, ErrorMessage } from 'formik';
// import InputMask from 'react-input-mask';
import ReactInputMask from 'react-input-mask';

export const FormStyle = styled(Form)`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Span = styled.span`
  font-size: 20px;
  font-weight: 500;

  color: #3a7999;
  margin-bottom: 10px;
`;

export const Input = styled(Field)`
  margin-bottom: 10px;
  width: 97%;
  height: 30px;
  font-size: 20px;

  ::placeholder {
    font-size: 14px;
    font-style: italic;
  }
`;

export const InputMaskWrapper = styled(ReactInputMask)`
  margin-bottom: 10px;
  width: 97%;
  height: 30px;
  font-size: 20px;

  ::placeholder {
    font-size: 14px;
    font-style: italic;
  }
`;

export const Button = styled.button`
  display: block;
  min-width: 150px;
  height: 40px;

  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;

  :hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
    transform: scale(1.05);
  }
`;
export const Error = styled(ErrorMessage)`
  color: red;
  margin-bottom: 5px;
`;
