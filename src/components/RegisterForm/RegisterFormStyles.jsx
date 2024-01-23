import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

const Input = styled.input`
  display: block;
  width: 30%;
  min-width: 450px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
  border: 1px solid #34345664;
  border-radius: 12px;
`;

const Button = styled.button`
  display: block;
  padding: 10px;
  width: 120px;
  font-size: 16px;
  font-weight: 700;
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

export { Form, Label, Input, Button };
