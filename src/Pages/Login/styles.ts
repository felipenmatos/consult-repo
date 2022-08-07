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

export const TitleForm = styled.h1``;
