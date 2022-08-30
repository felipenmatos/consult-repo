import React, { useState } from "react";
import { Header } from "../../Components/HeaderLogin";
import { Paper } from "../../Templates/Paper";
import { Form, TitleForm, RegisterButton, InputLogin, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import { useHook } from "../../Context/state";

export function Login() {
  const { userContext } = useHook();
  const { nameUser, setNameUser } = userContext;
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    if (nameUser.length > 5) {
      fetch(`https://api.github.com/users/${nameUser}/repos`).then(
        (response) => {
          response.json();
          console.log(response);
        }
      );
      navigate("/Home");
    } else {
      setError(true);
    }
  }

  console.log(nameUser);

  return (
    <Paper>
      <Header />
      <Form>
        <TitleForm>Login</TitleForm>
        <InputLogin
          placeholder="Digite o nome de usuário"
          value={nameUser}
          onChange={(e) => setNameUser(e.target.value)}
        />

        <RegisterButton>Cadastre-se</RegisterButton>
        <Button onClick={() => handleClick()}>Entrar</Button>
        {error === true ? <p>error</p> : <></>}
      </Form>
    </Paper>
  );
}
