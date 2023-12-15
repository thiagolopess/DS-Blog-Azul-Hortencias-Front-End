import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Content, BLabel, ForumStyles } from "./forumStyles"; 

const Foruns = () => {
  const navigate = useNavigate();

  const handleNavigate = (forumPath) => {
    navigate(`/forum${forumPath}`);
  };

  return (
    <>
      <ForumStyles />
      <Container>
        <BLabel>Fóruns</BLabel>
        <Content>
          <h2 className="destacado">Escolha um Fórum:</h2>
          <button className="botao" onClick={() => handleNavigate("/geral")}>
            Fórum Geral
          </button>
          <button className="botao" onClick={() => handleNavigate("/escribas")}>
            Fórum Escribas
          </button>
          <button className="botao" onClick={() => handleNavigate("/noticias")}>
            Fórum Notícias
          </button>
          <button className="botao" onClick={() => handleNavigate("/estudos")}>
            Fórum Estudos
          </button>
        </Content>
      </Container>
    </>
  );
};

export default Foruns;
