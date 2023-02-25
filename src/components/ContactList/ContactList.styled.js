import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: block;
  min-width: 80px;
  height: 30px;

  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 7px 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;
  /* :not(:last-child) {
    margin-right: 10px;
  } */

  :hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
    transform: scale(1.05);
  }
`;
