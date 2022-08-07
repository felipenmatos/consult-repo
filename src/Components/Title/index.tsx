import React from "react";
import { Container } from "./styles";

type ITitle = {
  name: string;
};

export const Title = ({ name }: ITitle) => {
  return <Container>{name}</Container>;
};
