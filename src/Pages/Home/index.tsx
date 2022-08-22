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
      <Body>
        <InputSearch placeholder="Busca por repositórios" />
        <Form>
          <FormDiv>
            <DivLi>
              <Li></Li>
              <ContainerStar>
                <IconStar />
                <TextStar>Star</TextStar>
              </ContainerStar>
            </DivLi>
          </FormDiv>
        </Form>
      </Body>
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

const Body = styled.div``;

const InputSearch = styled.input`
  width: 533px;
  height: 32px;

  border-radius: 100px;
  background-color: var(--secundary);
  padding: 20px;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 48px;
  color: var(--text);

  outline: 0;
  border: none;
`;

const Form = styled.div``;

const FormDiv = styled.div``;

const DivLi = styled.div``;

const Li = styled.h2``;

const ContainerStar = styled.div``;

const TextStar = styled.p``;

const IconStar = styled.img``;
