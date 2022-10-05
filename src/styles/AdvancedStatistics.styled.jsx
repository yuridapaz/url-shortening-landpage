import styled from 'styled-components';

export const AdvancedStatisticsDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 5rem;
  padding-bottom: 5rem;

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
`;
