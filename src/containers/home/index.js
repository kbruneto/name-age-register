import React, { useState, useRef} from "react";


import axios from "axios";
import People from "../../assets/say persons.svg";

import Arrow from "../../assets/arrow.svg";

import {
  Container,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  GoToUsers,
  DivGoTo,
  H1,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const {data: newUser} = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
      console.log(newUser)
      setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />

      <ContainerItens>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUser}>
          Register <img alt="arrow" src={Arrow}></img>
        </Button>

        <DivGoTo>
        <GoToUsers to="/users">Users</GoToUsers>
        </DivGoTo>


      </ContainerItens>
    </Container>
  );
};

export default App;
