import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title";
import ContainerItems from "../../components/Containeritems";
import Button from "../../components/Button";

import { Container, Image, UserList } from "./style";
/*para estilizar: adicionar a biblioteca styled-components => yarn add style-components*/

//JSX ... no react classes são dadas com: className em vez de apenas class
function Users() {
  const [users, setUsers] = useState([]); //nome da variavel, oq vai atualizar a variavel e o ([]) para setar valor da variavel

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="start-picture" src={Avatar} />
      <ContainerItems isBlur={true}>
        <H1>Users</H1>
        <ul>
          {users.map((user) => (
            <UserList key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </UserList>
          ))}
        </ul>
        <Button isBack={true} as={Link} to="/">
          <img alt="arrow-register" src={Arrow} /> Return
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default Users;
