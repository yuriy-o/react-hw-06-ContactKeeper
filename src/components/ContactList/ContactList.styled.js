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

  :hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
    transform: scale(1.05);
  }
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 15px;
`;

export const Name = styled.p`
  justify-self: start;
`;

export const Number = styled.p`
  justify-self: end;
`;
