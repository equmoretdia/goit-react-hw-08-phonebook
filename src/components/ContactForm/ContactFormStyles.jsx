import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  line-height: 1.5;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    max-width: 80%;
  }
`;

const Input = styled.input`
  display: block;
  min-width: 400px;
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
  margin: 10px auto;
  padding: 10px;
  width: 170px;
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

export { Form, Label, Input, Button };
