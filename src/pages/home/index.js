import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from '../../components/Title'
import {
  Container,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button,
} from "./style";
/*para estilizar: adicionar a biblioteca styled-components => yarn add style-components*/

//JSX ... no react classes são dadas com: className em vez de apenas class
function App() {
  const [users, setUsers] = useState([]); //nome da variavel, oq vai atualizar a variavel e o ([]) para setar valor da variavel
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="start-picture" src={People} />
      <ContainerItems>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input
          id="nameInput"
          ref={inputName}
          type="text"
          placeholder="Enter your name"
        />

        <InputLabel>Age</InputLabel>
        <Input
          id="ageInput"
          ref={inputAge}
          type="number"
          placeholder="Enter your age"
        />

        <Button
          onClick={async () => {
            if (inputName.current.value && inputAge.current.value) {
              await addNewUser();
              navigate("/user");
            } else {
              alert("Please enter your name and age!");
            }
          }}
        >
          Register <img alt="arrow-register" src={Arrow} />
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
