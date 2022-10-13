import styled from 'styled-components';

export const HeaderDiv = styled.header`
  width: 100%;
  max-width: 1000px;
  height: 90px;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  align-items: center;

  .navigation-web {
    display: flex;
  }

  .navigation-mobile {
    display: none;
  }

  .menu-bars {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const LogoDiv = styled.div`
  width: 130px;
  height: 100%;
  display: inline-flex;
  align-items: center;
  flex: 1;
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

    li {
      margin: 0 0.65rem;
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

  @media screen and (max-width: 480px) {
    padding: 0;
    ul {
      flex-direction: column;
      width: 100%;
      align-items: flex-end;
      li {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const UserDiv = styled.div`
  margin-left: auto;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    width: 210px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    width: 100%;
    flex-direction: column;
    button {
      margin-bottom: 1rem;
    }
  }
`;
