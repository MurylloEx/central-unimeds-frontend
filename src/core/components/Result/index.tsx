import React, { FunctionComponent } from 'react';
import { Container, Row, Title, Text, Globe, Phone, Location, Separator, MetadataBlock } from './styles';
import { capitalize } from '../../services';

export interface ResultProps {
  name: string;
  siteUrl?: string;
  phone: string;
  address: string;
  uf: string;
}

export const Result: FunctionComponent<ResultProps> = (props) => {
  return (
    <Container>
      <Title href={'http://' + props.siteUrl ?? "#notfound"}>{props.name}</Title>
      <Row>
        <MetadataBlock>
          <Globe />
          <Text>{props.siteUrl || "Nenhum site cadastrado"}</Text>
          <Separator /> 
        </MetadataBlock>

        <MetadataBlock>
          <Phone />
          <Text>{props.phone}</Text>
          <Separator />
        </MetadataBlock>
        
        <MetadataBlock>
          <Location />
          <Text>{capitalize(props.address) + ", " + props.uf}</Text>
        </MetadataBlock>
      </Row>
    </Container>
  );
}
