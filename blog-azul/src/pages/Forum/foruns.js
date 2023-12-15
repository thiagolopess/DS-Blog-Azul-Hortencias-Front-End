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
          <h2>Escolha um Fórum:</h2>
          <Link to="/forum/geral">
            <button>Fórum Geral</button>
          </Link>
          <Link to="/forum/escribas">
            <button>Fórum Escribas</button>
          </Link>
          <Link to="/forum/noticias">
            <button>Fórum Notícias</button>
          </Link>
          <Link to="/forum/estudos">
            <button>Fórum Estudos</button>
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default Foruns;
