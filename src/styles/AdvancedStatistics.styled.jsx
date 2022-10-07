import styled from 'styled-components';

export const AdvancedStatisticsDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 10rem;

  .description {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 5rem;
    width: 650px;
    .title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors.darkViolet};
    }
    .paragraph {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.grayishViolet};
    }
  }

  .card-section-div {
    display: flex;
    height: 350px;
    justify-content: space-between;
    position: relative;

    .card {
      width: 30%;
      padding: 4rem 1.5rem 2rem 1.5rem;
      border-radius: 10px;
      background-color: #fff;
      position: relative;
      z-index: 5;

      .card-icon {
        position: absolute;
        background-color: ${({ theme }) => theme.colors.darkViolet};
        padding: 18px;
        border-radius: 50%;
        top: -45px;
        left: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card-title {
        font-size: 1.15rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.veryDarkBlue};
      }

      .card-paragraph {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.grayishViolet};
      }
    }

    .first-card {
      align-self: flex-start;
    }

    .second-card {
      align-self: center;
    }

    .third-card {
      align-self: flex-end;
    }

    &:after {
      position: absolute;
      align-self: center;
      content: '';
      width: 100%;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.cyan};
      z-index: 1;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 0;
    padding-bottom: 2rem;

    .description {
      .title {
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
      }

      .paragraph {
        margin: 0 auto;
        max-width: 500px;
        font-size: 1rem;
      }
    }

    .card-section-div {
      height: auto;
      justify-content: space-around;

      .card {
        padding: 3rem 1rem 1.5rem 1rem;

        .card-title {
          font-size: 1.15rem;
        }

        .card-paragraph {
          font-size: 0.75rem;
        }
      }

      .first-card {
        align-self: auto;
      }

      .second-card {
        align-self: auto;
      }

      .third-card {
        align-self: auto;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 0;
    .description {
      width: 85%;
      margin: 5rem auto;

      .title {
        font-size: 1.5rem;
      }

      .paragraph {
        font-size: 0.9rem;
      }
    }

    .card-section-div {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .card {
        width: 85%;
        padding: 3rem 2.3rem 2rem 2.3rem;
        margin-bottom: 4rem;
        text-align: center;

        .card-icon {
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &:after {
        transform: rotate(90deg);
        width: 600px;
      }
    }
  }
`;
