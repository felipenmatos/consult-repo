import React from "react";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/HeaderLogin";
import { InputLogin } from "../../Components/InputLogin";
import { Paper } from "../../Templates/Paper";
import { Form, TitleForm, RegisterButton } from "./styles";

export function Login() {
  return (
    <Paper>
      <Header />
      <Form>
        <TitleForm>Faça o seu Login</TitleForm>
        <InputLogin />
        <RegisterButton>Cadastre-se</RegisterButton>
        <Button name="Entrar" />
      </Form>
    </Paper>
  );
}
