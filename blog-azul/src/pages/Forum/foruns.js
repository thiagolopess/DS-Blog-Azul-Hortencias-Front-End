import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, BLabel, ForumStyles } from "./forumStyles"; 

const Foruns = () => {
  return (
    <>
      <ForumStyles /> {}
      <Container>
        <BLabel>Fóruns</BLabel>
        <Content>
          <h2 class="destacado">Escolha um Fórum:</h2>
          <Link to="/forum/geral">
            <button class="botao">Fórum Geral</button>
          </Link>
          <Link to="/forum/escribas">
            <button class="botao">Fórum Escribas</button>
          </Link>
          <Link to="/forum/noticias">
            <button class="botao">Fórum Notícias</button>
          </Link>
          <Link to="/forum/estudos">
            <button class ="botao">Fórum Estudos</button>
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default Foruns;
