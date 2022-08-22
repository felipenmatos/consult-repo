import React, { useState } from "react";
import { Header } from "../../Components/HeaderLogin";
import { Paper } from "../../Templates/Paper";
import { Form, TitleForm, RegisterButton, InputLogin, Button } from "./styles";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [nickname, setNickname] = useState("");
  const [repos, setRepos]: any = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  let myConsult = {
    method: "Get",
  };

  function handleClick() {
    if (nickname.length > 0) {
      fetch(`https://api.github.com/users/${nickname}/repos`)
        .then((response) => {
          navigate("/ListRepo");
        })
        .then((data) => setRepos(data));
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
