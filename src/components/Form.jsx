import React from 'react';
import styled from 'styled-components';
import boostBg from '../images/bg-shorten-desktop.svg';
import { SquaredButton } from './Button';

const FormContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 3rem;
  border-radius: 10px;
  background-image: url(${boostBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  display: flex;
  input {
    height: 60px;
    flex: 1;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    outline: none;
    border: ${(props) => (props.validateUrl ? '1px solid red' : '')};
  }

  .submit-form-button {
    margin-left: 1.2rem;
    border-radius: 10px;
    width: 150px;
    height: 60px;
  }

  &:after {
    content: 'Please add a valid link';
    position: absolute;
    bottom: 20px;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.red};
    display: ${(props) => (props.validateUrl ? 'show' : 'none')};
  }

  @media screen and (max-width: 768px) {
    max-width: 740px;
    padding: 1.8rem 1.2rem;

    input {
      padding: 0.3rem 0.6rem;
    }

    &:after {
      bottom: 8px;
    }
  }
`;

export const Form = ({ onClick, inputValue, onChange, validateUrl }) => {
  return (
    <FormContainer validateUrl={validateUrl}>
      <input
        type='text'
        name='link'
        placeholder='Shorten a link here...'
        value={inputValue}
        onChange={onChange}
      />
      <SquaredButton className='submit-form-button' onClick={onClick}>
        Shorten It!
      </SquaredButton>
    </FormContainer>
  );
};

export default Form;
