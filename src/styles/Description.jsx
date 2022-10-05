import React from 'react';
import { DescriptionDiv } from './Description.styled';
import { RoundedButton } from '../components/Button';
import illustrator from '../images/illustration-working.svg';

const Description = () => {
  return (
    <DescriptionDiv>
      <h1 className='h1-description'>More than just shorter links</h1>
      <p className='detailed-description'>
        Build your brand's recognition and get detailed insights on how your links are performing.
      </p>
      <RoundedButton className='btn-started'>Get Started</RoundedButton>
      <img className='illustrator-img' src={illustrator} alt='' sizes='' srcset='' />
    </DescriptionDiv>
  );
};

export default Description;
