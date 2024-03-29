import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

export { Form, Label, Input };
