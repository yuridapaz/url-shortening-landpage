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

  @media screen and (max-width: 768px) {
    padding-top: 3.5rem;
  }
`;

export const ShorteningLinksContainer = styled.ul`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 400px;
  overflow: auto;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
  }

  @media screen and (max-width: 480px) {
    width: 95%;
    margin-top: 2rem;
    /* padding-top: 2rem; */
  }
`;
