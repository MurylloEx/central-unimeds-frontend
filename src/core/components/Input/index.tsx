import React, { FunctionComponent } from "react";
import { Container, SearchIcon, TextInput } from "./styles";

export interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
}

export const Input: FunctionComponent<InputProps> = ({ onChange, value }) => {
  return (
    <Container>
      <SearchIcon />
      <TextInput 
        id="textInput"
        placeholder="Pesquisar" 
        onChange={onChange}
        value={value}
      />
    </Container>
  );
}

