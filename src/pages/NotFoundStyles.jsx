import styled from 'styled-components';
import image from '../img/background/not-found-page.jpg';

const Container = styled.div`
  display: block;
  min-height: calc(100vh);
  background-image: linear-gradient(
      to bottom,
      rgb(210, 200, 200, 0.9),
      rgb(215, 200, 200, 0.4)
    ),
    url(${image});
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 1.5em;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.33;
`;

export { Container, Title };
