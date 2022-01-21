import { Fragment, FunctionComponent } from "react";
import { Button, Card } from "../../core/components";

export interface HomePageProps { }

export const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div>
      <Card 
        image="https://static.wixstatic.com/media/3bae40_742f4fbd12054a36a345e20b0d09ea0c~mv2.jpg/v1/fill/w_312,h_208,q_90/3bae40_742f4fbd12054a36a345e20b0d09ea0c~mv2.webp"
        params={{}}
        routerLink="/sobre"
      />
      <Button text="Enviar"/>
    </div>
  );
}