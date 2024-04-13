import React from "react";
import ReactDOM from "react-dom/client";
//veio assim: import ReactDOM from 'react-dom/client';
import App from "./App";
//para importação de export default é só import 'nome arquivo', para export é import {nome arquivo}
import GlobalStyle from "./globalStyle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);

/* no react, não se pode começar com um elemento e terminar com outro, tem que ser sanduiche, papo em cima e pao embaixo, por isso a div mas como é apenas para isso, foi invetado o fragment que é <> </> */