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
