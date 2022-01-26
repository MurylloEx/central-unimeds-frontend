import styled from "styled-components";

export const Container = styled.div`
  & {
    padding-top: 64px;
    padding-bottom: 32px;
  }
  @media only screen and (min-width: 1025px) {
    & {
      margin-left: 100px;
      margin-right: 100px;
    }
  }
  @media only screen and (max-width: 1024px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Paragraph = styled.p`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 32px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;