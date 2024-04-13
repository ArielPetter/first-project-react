import React from "react";

import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  UserList
} from "./style";
/*para estilizar: adicionar a biblioteca styled-components => yarn add style-components*/

//JSX ... no react classes são dadas com: className em vez de apenas class
function App() {
  const users = [
    { id: Math.random(), name: "Ariel", age: 20 },
    { id: Math.random(), name: "Eduardo", age: 24 },
  ];

  return (
    <Container>
      <Image alt="start-picture" src={People} />
      <ContainerItems>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Type your name " />

        <InputLabel>Age</InputLabel>
        <Input placeholder="Type your age " />

        <Button>
          Register <img alt="arrow-register" src={Arrow} />
        </Button>
        <ul>
          {users.map((user) => (
            <UserList key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img alt="trash" src={Trash}/></button>
            </UserList>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
