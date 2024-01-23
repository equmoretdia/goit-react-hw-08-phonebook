import styled from 'styled-components';
import image from '../img/background/contacts-page.jpg';

const Section = styled.section`
  display: block;
  min-height: calc(95vh);
  font-weight: 700;
  background-image: linear-gradient(
      to left,
      rgb(210, 200, 200, 0.9),
      rgb(215, 200, 200, 0.5)
    ),
    url(${image});
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: center;

  @media only screen and (max-width: 1199px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
`;

const Title = styled.h1`
  padding-top: 1em;
  text-align: center;
  font-size: 34px;
  line-height: 1.33;
`;

export { Section, Wrapper, Container, Title };
