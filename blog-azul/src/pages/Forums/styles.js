// styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 20px;
  align-items: center; // Adiciona alinhamento vertical ao centro
`;

export const ForumList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ForumButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #007bff;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  font-size: 14px; // Ajusta o tamanho da fonte
  color: #fff;
  background-color: #007bff;
  border: 1px solid #007bff;
  padding: 5px 10px; // Ajusta o preenchimento para reduzir o tamanho
  border-radius: 5px;
  margin-left: 10px; // Adiciona margem à esquerda para espaçamento
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; // Cor mais escura no hover
  }
`;
