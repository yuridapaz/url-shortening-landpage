import styled from 'styled-components';

export const FooterDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkViolet};
  padding: 3rem;

  .footer-section {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .links-section {
    display: flex;

    .links-subsection {
      margin: 0 2rem;
      color: #fff;

      .naming {
        font-size: 0.9rem;
        margin-bottom: 0.8rem;
      }

      .links-list {
        list-style: none;

        li {
          .link-anchor {
            text-decoration: none;
            font-size: 0.8rem;

            &:hover {
              cursor: pointer;
            }

            &:visited {
              color: ${({ theme }) => theme.colors.gray};
            }
          }
        }
      }
    }
  }

  .social-section {
    width: 160px;
    display: flex;
    justify-content: space-between;

    .social-icon {
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .social-section {
      flex-direction: column;
      align-items: center;
    }
  }
`;
