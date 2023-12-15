import React, { useState, useContext } from "react";
import { Container, BLabel, ForumStyles } from "./forumStyles";
import { AuthContext } from "../../contexts/auth"

const GeralForum = () => {
  const { user } = useContext(AuthContext);

  const [novoPost, setNovoPost] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const adicionarPost = () => {
    setComentarios([
      ...comentarios,
      { usuario: user?.email || "Anônimo", texto: novoPost },
    ]);
    setNovoPost("");
  };

  return (
    <>
      <ForumStyles /> {/* Aplicação dos estilos globais do fórum */}
      <Container>
        <BLabel>Fórum Geral</BLabel>
        <div>
          <h2>Bem-vindo ao Fórum Geral, {user?.email || "Visitante"}!</h2>

          <textarea
            value={novoPost}
            onChange={(e) => setNovoPost(e.target.value)}
            placeholder="Faça um novo post..."
          />
          <button onClick={adicionarPost}>Postar</button>

          {comentarios.map((comentario, index) => (
            <div key={index}>
              <strong>{comentario.usuario}</strong>: {comentario.texto}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default GeralForum;
