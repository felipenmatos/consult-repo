import styled from "styled-components";
import { Title } from "../../Components/Title";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextTitle = styled(Title)``;

export const Form = styled.div`
  width: 460px;
  height: 400px;
  margin-top: 100px;
  border-radius: 100px;
  background-color: var(--secundary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleForm = styled.h1`
  color: var(--text);
  margin-top: 70px;
`;

export const RegisterButton = styled.a`
  margin-top: 7px;
  margin-left: 50%;
  color: var(--link);
  cursor: pointer;
`;

export const InputLogin = styled.input`
  width: 315px;
  height: 40px;
  margin-top: 50px;
  border: none;
  color: #ffffff;
  background-color: var(--primary);
  text-align: center;
  border-radius: 100px;
  outline: 0px;
`;

export const Button = styled.button`
  width: 180px;
  height: 40px;
  margin-top: 40px;
  color: var(--primary);
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  border-radius: 100px;
  border: none;
  cursor: pointer;
`;
