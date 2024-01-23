import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  gap: 10px;
  padding: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.02);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: block;
  width: 90px;
  padding: 10px;
  font-size: 16px;
  font-weight: inherit;
  color: #e3e3ee;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #383848;
  border-radius: 12px;
  border: none;
  transition: box-shadow 0.1s, transform 0.1s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

export { Item, ButtonGroup, Button };
