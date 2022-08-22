import React from "react";
import { Paper } from "../../Templates/Paper";
import styled from "styled-components";
import logo from "../../assets/logo.png";
//import { Container } from "./styles";

export function Home() {
  return (
    <Paper>
      <HeaderHome>
        <Icon src={logo} />
        <ButtonMenu />
      </HeaderHome>
    </Paper>
  );
}

const HeaderHome = styled.div`
  width: 80%;
  height: 10%;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Icon = styled.img``;

const ButtonMenu = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: var(--secundary);
  border: none;
  cursor: pointer;
`;
