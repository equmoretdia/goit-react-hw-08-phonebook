import styled from 'styled-components';

const LargeLoader = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MediumLoader = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
`;

const SmallLoader = styled.div`
  display: flex;
  justify-content: center;
`;

export { LargeLoader, MediumLoader, SmallLoader };
