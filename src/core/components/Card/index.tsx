import { CSSProperties, Fragment, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export interface CardProps {
  image: string;
  routerLink: string;
  params: any;
  style?: CSSProperties | undefined;
}

export const Card: FunctionComponent<CardProps> = ({ image, routerLink, params, style }) => {

  const navigate = useNavigate();

  function onClick(){
    navigate(routerLink, { state: params });
  }

  return (
    <Container 
      style={style}
      onClick={onClick} 
      cardImage={image} 
    />
  );
}

