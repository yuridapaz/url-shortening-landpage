import styled from 'styled-components';

export const DescriptionDiv = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 450px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  .h1-description {
    font-size: 3.5rem;
    font-weight: 700;
    max-width: 500px;
    z-index: 5;
  }
  .detailed-description {
    font-size: 1.1rem;
    max-width: 500px;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.colors.gray};
    z-index: 5;
  }
  .illustrator-img {
    width: 700px;
    position: absolute;
    right: -200px;
  }
`;
