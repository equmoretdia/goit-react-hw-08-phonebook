import styled from 'styled-components';
import image from '../../img/background/modal.jpg';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 570px;
  padding: 60px 0 40px;
  width: 100%;
  font-weight: 700;
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
  border-radius: 12px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export { Backdrop, Content };
