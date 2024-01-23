import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export { Wrapper };
