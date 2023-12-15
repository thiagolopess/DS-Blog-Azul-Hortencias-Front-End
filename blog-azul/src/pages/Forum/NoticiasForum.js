import React from "react";
import { Container, BLabel, ForumStyles } from "./forumStyles";

const NoticiasForum = () => {
  return (
    <>
      <ForumStyles />
      <Container>
        <BLabel>Fórum de Notícias</BLabel>
        <div>
          <h2>Fórum de Notícias</h2>
          {/* Conteúdo específico do fórum de notícias */}
        </div>
      </Container>
    </>
  );
};

export default NoticiasForum;
