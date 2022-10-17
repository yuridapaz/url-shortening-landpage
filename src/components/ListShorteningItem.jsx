import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  width: 100%;
  padding: 20px 30px;
  margin-bottom: 1rem;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;

  p {
    font-size: 0.9rem;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
  }

  span {
    color: ${({ theme }) => theme.colors.cyan};
    margin-left: 2rem;
  }

  button {
    font-size: 0.8rem;
    padding: 5px 20px;
    margin-left: 1rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.cyan};
    outline: none;
    border: none;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    p {
      width: 100%;
      margin-bottom: 0.9rem;
    }

    span {
      margin-left: 0;
      margin-bottom: 0.9rem;
    }

    button {
      width: 100%;
      height: 40px;
      margin-left: 0;
    }

    &:after {
      position: absolute;
      align-self: center;
      content: '';
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.gray};
      top: 50px;
    }
  }
`;

const ListShorteningItem = ({ fullUrl, shortUrl }) => {
  return (
    <ListItem>
      <p>{fullUrl}</p> <span> {shortUrl} </span>
      <button>Copy</button>
    </ListItem>
  );
};

export default ListShorteningItem;
