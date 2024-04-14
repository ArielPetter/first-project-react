import React from "react";
import {createRoot} from "react-dom/client";
//veio assim: import ReactDOM from 'react-dom/client';
//para importação de export default é só import 'nome arquivo', para export é import {nome arquivo}
import GlobalStyle from "./styles/globalStyle";
import Routes from "./routes"

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Routes />
    <GlobalStyle />
  </>
);

/* no react, não se pode começar com um elemento e terminar com outro, tem que ser sanduiche, papo em cima e pao embaixo, por isso a div mas como é apenas para isso, foi invetado o fragment que é <> </> */