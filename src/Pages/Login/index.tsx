import React from "react";
import { Header } from "../../Components/HeaderLogin";
import { Paper } from "../../Templates/Paper";
import { Form, TitleForm } from "./styles";

export function Login() {
  return (
    <Paper>
      <Header />
      <Form>
        <TitleForm>Faça o seu Login</TitleForm>
      </Form>
    </Paper>
  );
}
