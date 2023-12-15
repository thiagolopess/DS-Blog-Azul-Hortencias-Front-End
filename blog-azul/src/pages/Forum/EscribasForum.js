import React from "react";
import { Container, BLabel, ForumStyles } from "./forumStyles";

const EscribasForum = () => {
  return (
    <>
      <ForumStyles />
      <Container>
        <BLabel>Fórum de Escribas</BLabel>
        <div>
          <h2>Fórum de Escribas</h2>
          {/* Conteúdo específico do fórum de escribas */}
        </div>
      </Container>
    </>
  );
};

export default EscribasForum;
