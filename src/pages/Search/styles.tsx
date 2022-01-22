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