import React from "react";
import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
} from "./style";
/*para estilizar: adicionar a biblioteca styled-components => yarn add style-components*/

//JSX ... no react classes são dadas com: className em vez de apenas class
const App = () => {
  return (
    <Container>
      <Image />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Digite seu nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Digite sua idade" />
        
        <Button>Cadastrar</Button>
      </ContainerItems>
    </Container>
  );
};

export default App;
