import styled from 'styled-components';

export const HeaderDiv = styled.header`
  width: 100%;
  max-width: 1000px;
  height: 90px;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }

  /* @media screen and (max-width: 480px) {
    padding: 0 1rem;
  } */
`;

export const LogoDiv = styled.div`
  width: 130px;
  height: 100%;
  display: inline-flex;
  align-items: center;
  .svg-logo {
    cursor: pointer;
  }
`;

export const NavDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 0 1rem;
      a {
        transition: 0.2s ease;
        text-decoration: none;
        &:visited {
          color: ${({ theme }) => theme.colors.gray};
        }
        &:hover {
          color: black;
        }
      }
    }
  }
`;

export const UserDiv = styled.div`
  width: 280px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 210px;
  }
`;
