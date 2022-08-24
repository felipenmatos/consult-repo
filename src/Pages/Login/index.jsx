import React, { useState } from "react";
import { Header } from "../../Components/HeaderLogin";
import { Paper } from "../../Templates/Paper";
import { Form, TitleForm, RegisterButton, InputLogin, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import { useHook } from "../../Context/state";

export function Login() {
  const [nickname, setNickname] = useState("");
  const { userContext } = useHook();
  const { repos, setRepos } = userContext;
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    if (nickname.length > 5) {
      fetch(`https://api.github.com/users/${nickname}/repos`)
        .then((response) => response.json())
        .then((data) => setRepos(data));
      navigate("/Home");
    } else {
      setError(true);
    }
  }

  console.log(repos);

  return (
    <Paper>
      <Header />
      <Form>
        <TitleForm>Login</TitleForm>
        <InputLogin
          placeholder="Digite o nome de usuário"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <RegisterButton>Cadastre-se</RegisterButton>
        <Button onClick={() => handleClick()}>Entrar</Button>
        {error === true ? <p>error</p> : <></>}
      </Form>
    </Paper>
  );
}
