import { ChangeEvent, Fragment, FunctionComponent, useEffect, useState } from "react";
import { Input, Render, Result } from "../../core/components";
import { UnimedResponseType } from "../../core/typescript";
import { useHttpGet } from "../../core/hooks";
import { Container } from "./styles";

export interface SearchProps { }

export const SearchPage: FunctionComponent<SearchProps> = () => {
  
  const [filterPattern, setFilterPattern] = useState('');
  const [results, setResults] = useState<UnimedResponseType[]>([]);
  const { isSuccess, isError, data } = useHttpGet<UnimedResponseType[]>({ url: '/unimeds' }, 3600);

  useEffect(() => {
    if (isSuccess && !isError && !!data)
      setResults(data.response ?? []);
  }, [isSuccess, isError, data]);

  function onChange(e: ChangeEvent<HTMLInputElement>){
    let pattern = e.target.value.toLowerCase();
    setFilterPattern(pattern);
    setResults(data?.response.filter(unimed => {
      return unimed.nmUnimed.toLowerCase().includes(pattern);
    }) ?? []);
  }

  return (
    <Container>
      <Input value={filterPattern} onChange={onChange} />
      <Render if={isSuccess}>
        {results.map((unimed) => (
          <Result 
            name={unimed.nmUnimed}
            phone={unimed.telefone}
            address={unimed.endereco + " " + unimed.cidade}
            siteUrl={unimed.site} 
            uf={unimed.uf}
          />
        ))}
      </Render>
    </Container>
  );
  
}
