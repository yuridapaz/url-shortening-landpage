import styled from 'styled-components';

export const BodyContainer = styled.body`
  background-color: #fff;
  width: 100vw;
  overflow: hidden;
`;

export const BodyContent = styled.div`
  width: 100%;
  padding-top: 6rem;
  background-color: ${({ theme }) => theme.colors.bgGray};
  position: relative;
`;

export const ShorteningLinksContainer = styled.ul`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
