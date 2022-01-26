import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { useRequest } from "../../core/hooks";
import { UnimedResponseType } from "../../core/typescript";
import { Input, Render, Result } from "../../core/components";

import { Container, Paragraph } from "./styles";

export interface SearchProps { }

export const SearchPage: FunctionComponent<SearchProps> = () => {
  
  const [filterPattern, setFilterPattern] = useState('');
  const [results, setResults] = useState<UnimedResponseType[]>([]);
  const {response, success, request: doGetUnimeds} = useRequest<UnimedResponseType[]>(onApiResponse, true);

  useEffect(() => {
    doGetUnimeds('GET', { url: '/unimeds' });
  }, []);

  function onApiResponse(){
    if (success && !!response){
      setResults(response.data.slice(0, 20) ?? []);
    }
  }

  function onChange(e: ChangeEvent<HTMLInputElement>){
    setFilterPattern(e.target.value);
    let pattern = e.target.value.toLowerCase();
    let filteredResults = response?.data.filter(unimed => {
      return unimed.nmUnimed.toLowerCase().includes(pattern);
    }) ?? [];
    setResults(filteredResults.slice(0, 20));
  }

  function onFetchMoreData(){
    setTimeout(() => {
      let total = response?.data ?? [];
      let chunk = total.slice(
        results.length, 
        results.length + 20 % total.length);

      setResults(results.concat(chunk));
    }, 1500);
  }

  return (
    <Container>

      <Input value={filterPattern} onChange={onChange} />

      <Render if={success}>
        <Render if={results.length > 0}>
          <InfiniteScroll
            dataLength={results.length}
            next={onFetchMoreData}
            hasMore={true}
            loader={
              <Paragraph>
                Carregando...
              </Paragraph>
            }
            endMessage={
              <Paragraph>
                Você visualizou todos os resultados
              </Paragraph>
            }
          >
            {results.map((unimed, key) => (
              <Result 
                key={key}
                name={unimed.nmUnimed}
                phone={unimed.telefone}
                address={unimed.endereco + " " + unimed.cidade}
                siteUrl={unimed.site} 
                uf={unimed.uf}
              />
            ))}
          </InfiniteScroll>
        </Render>

        <Render if={results.length === 0}>
          <Paragraph>
            Não há resultados correspondentes à busca.
          </Paragraph>
        </Render>
      </Render>
    
    </Container>
  );
  
}
