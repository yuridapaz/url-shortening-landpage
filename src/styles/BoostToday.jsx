import React from 'react';
import styled from 'styled-components';
import { RoundedButton } from '../components/Button';
import bgBoostDesktop from '../images/bg-boost-desktop.svg';

const BoostLinkDiv = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${bgBoostDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title-boost {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .button-boost {
    font-size: 1.1rem;
    font-weight: 700;
    padding: 0.7rem 1.7rem;
  }

  @media screen and (max-width: 480px) {
    .title-boost {
      font-size: 1.4rem;
    }

    .button-boost {
      font-size: 1rem;
    }
  }
`;

const BoostToday = () => {
  return (
    <BoostLinkDiv>
      <h2 className='title-boost'>Boost your links today</h2>
      <RoundedButton className='button-boost'>Get Started</RoundedButton>
    </BoostLinkDiv>
  );
};

export default BoostToday;
