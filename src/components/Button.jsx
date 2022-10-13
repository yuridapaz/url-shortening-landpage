import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  background: none;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  border: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.veryDarkViolet};
  }
`;

export const RoundedButton = styled(Button)`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.cyan};
  :hover {
    color: #fff;
    background-color: #5ceaea;
  }
`;

export const SquaredButton = styled(Button)`
  color: #fff;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.cyan};
  :hover {
    color: #fff;
    background-color: #5ceaea;
  }
`;
