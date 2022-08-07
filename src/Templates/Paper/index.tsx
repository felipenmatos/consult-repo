import React, { ReactNode } from "react";
import { Container } from "./styles";

type IPaper = {
  children: ReactNode;
};

export const Paper = ({ children }: IPaper) => {
  return <Container>{children}</Container>;
};
