import React, { useEffect, useState } from "react";
import { Paper } from "../../Templates/Paper";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import star from "../../assets/Star.svg";
import { useHook } from "../../Context/state";
//import { Container } from "./styles";

interface Repo {
  name: string;
  description: string;
}

export function Home() {
  const { userContext }: any = useHook();
  const { nameUser, setNameUser } = userContext;
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${nameUser}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, [nameUser, setNameUser]);
  console.log(repos);

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
            {repos.map((repo) => {
              return (
                <DivLi>
                  <Li key={repo.name}>{repo.name}</Li>
                  <ContainerStar>
                    <IconStar src={star} />
                    <TextStar>Star</TextStar>
                  </ContainerStar>
                </DivLi>
              );
            })}
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

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const Form = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: var(--secundary);
  border-radius: 50px 50px 0px 0px;

  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const FormDiv = styled.div`
  margin-top: 80px;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px 50px 0px 0px;
  border: 1px solid #cdd9da;
`;

const DivLi = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cdd9da;
`;

const Li = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #539bf5;
`;

const ContainerStar = styled.div`
  width: 106px;
  height: 36px;
  display: flex;
  flex-direction: row;
  background-color: var(--primary);
  border-radius: 100px;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

const TextStar = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cdd9da;
`;

const IconStar = styled.img`
  width: 20px;
  height: 20px;
`;
