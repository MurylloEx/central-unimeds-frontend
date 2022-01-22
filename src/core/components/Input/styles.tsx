import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #C4C4C4;
  border-radius: 4px;
  align-items: center;
  height: 40px;
  width: 213px;
`;

export const SearchIcon = styled(BsSearch)`
  color: #7F7F7F;
  font-size: 18px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 24px;
`;

export const TextInput = styled.input`
  & {
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    color: #7F7F7F;
    border: none;
    border-width: 0;
    outline: 0;
    -webkit-appearance: none;
  }
  &:focus {
    border: none;
    border-width: 0;
    outline: 0;
    box-shadow: none;
  }
`;