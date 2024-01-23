import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  margin-right: 4px;
`;

const Name = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  margin-right: 12px;
`;

const Button = styled.button`
  display: block;
  width: 90px;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #383848;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #e3e3ee;
  border-radius: 12px;
  border: none;
  transition: box-shadow 0.1s, transform 0.1s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

export { Container, Avatar, Name, Button };
