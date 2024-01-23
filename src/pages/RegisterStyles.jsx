import styled from 'styled-components';
import image from '../img/background/register-page.jpg';

const Container = styled.div`
  display: block;
  min-height: calc(95vh);
  padding: 20px 32px;
  background-image: linear-gradient(
      to bottom,
      rgb(210, 200, 200, 0.7),
      rgb(215, 200, 200, 0.2)
    ),
    url(${image});
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 20px;
`;

export { Container, Title };
