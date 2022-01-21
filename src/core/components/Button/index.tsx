import { Fragment, FunctionComponent } from "react";
import { Container, Label } from "./styles";

export interface ButtonProps { 
  text: string;
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <Container onClick={onClick ?? (() => {})}>
      <Label>{text}</Label>
    </Container>
  );
}

