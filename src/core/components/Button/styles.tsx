import styled from "styled-components";

export const Container = styled.div`
  & {
    text-align: center;
    padding: 4px;
    background-color: #000;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.8;
    transition: .4s ease 0s; 
  }

  &:active {
    opacity: 0.6;
    transition: .4s ease 0s; 
  }
`;

export const Label = styled.p`
  color: #fff;
  user-select: none;
  cursor: pointer;
  font: normal normal normal 14px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light, sans-serif;
`;