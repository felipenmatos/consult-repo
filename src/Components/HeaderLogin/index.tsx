import React from "react";
import { Row, ImgLogo, TextTitle } from "./styles";
import imgLogo from "../../assets/logo.png";

export const Header = () => {
  return (
    <Row>
      <ImgLogo src={imgLogo} />
      <TextTitle name="Listagem de Repositórios" />
    </Row>
  );
};
