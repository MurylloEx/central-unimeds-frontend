import styled from 'styled-components';
import { BsGeoAlt, BsGlobe, BsTelephone } from 'react-icons/bs';

export const Container = styled.div`
  & {
    display: flex;
    flex-direction: column;
    padding: 8px;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const Title = styled.a`
  & {
    font-size: 20px;
    font-weight: bold;
    color: #060055;
    padding-bottom: 12px;
    margin-top: 42px;
    text-decoration: none;
  }
`;

export const Row = styled.div`
  @media only screen and (min-width: 1025px) {
    & {
      display: flex;
      flex-direction: row;
      flex-wrap: 1;
      padding-bottom: 42px;
      border-bottom: 1px solid #D4D4D4;
      align-items: center;
    }
  }
  @media only screen and (max-width: 1024px) {
    & {
      display: block;
      flex-direction: row;
      padding-bottom: 42px;
      border-bottom: 1px solid #D4D4D4;
    }
  }
`;

export const Text = styled.p`
  & {
    color: #838080;
    font-size: 16px;
  }
  &::after {
    background-color: red;
    padding: 32px;
    margin-top: 32px;
  }
`;

export const Globe = styled(BsGlobe)`
  color: #060055;
  padding-right: 6px;
  font-size: 13px;
`;

export const Location = styled(BsGeoAlt)`
  color: #060055;
  padding-right: 6px;
  font-size: 13px;
`;

export const Phone = styled(BsTelephone)`
  color: #060055;
  padding-right: 6px;
  font-size: 13px;
`;

export const Separator = styled.p`
  @media only screen and (min-width: 1025px) {
    & {
      padding-left: 16px;
      padding-right: 16px;
      font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }
    &::after {
      align-content: center;
      font-size: 16px;
      color: #838080;
      content: "|";
    }
  }
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
`;

export const MetadataBlock = styled.div`
  & {
    display: flex;
    flex-direction: row;
    margin-bottom: 6px;
  }
  @media only screen and (min-width: 1025px) {
    & {
      align-items: center;
    }
  }
  @media only screen and (max-width: 1024px) {
    & {
      align-items: flex-start;
    }
  }
`;