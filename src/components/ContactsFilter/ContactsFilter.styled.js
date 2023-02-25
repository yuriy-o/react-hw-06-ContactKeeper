import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;

  color: #3a7999;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  margin-bottom: 10px;
  width: 97%;
  height: 30px;
  font-size: 20px;

  ::placeholder {
    font-size: 14px;
    font-style: italic;
  }
`;
