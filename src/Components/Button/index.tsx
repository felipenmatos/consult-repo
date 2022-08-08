import React from "react";
import { Container } from "./styles";

type IButton = {
  name: string;
};

export const Button = ({ name }: IButton) => {
  return <Container>{name}</Container>;
};
