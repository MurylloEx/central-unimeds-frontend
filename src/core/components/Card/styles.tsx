import styled from "styled-components";

export interface ContainerProps {
  cardImage: string;
}

export const Container = styled.div.attrs<ContainerProps>(props => props)<ContainerProps>`
  & {
    width: 312px;
    height: 208px;
    background-image: url(${props => props.cardImage});
  }
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
