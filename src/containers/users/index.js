import React, { useState, useEffect } from "react";

import axios from "axios";
import Avatar from "../../assets/three persons.svg";

import Arrow from "../../assets/arrow.svg";

import Trash from "../../assets/trash.svg";

import {
  Container,
  Image,
  ContainerItens,
  Button,
  User,
  H1,
} from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() =>{

    async function fetchUsers() {
      const {data: newUsers} = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUsers()
  }, []);

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />

      <ContainerItens>
        <H1>Users</H1>  

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trash-button" />
              </button>
            </User>
          ))}
        </ul>

        <Button to="/">
        <img alt="arrow" src={Arrow} /> Return 
        </Button>


      </ContainerItens>
    </Container>
  );
};

export default Users;
