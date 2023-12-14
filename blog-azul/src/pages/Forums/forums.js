// forums.js
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Forums = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleForumClick = (forumName) => {
    navigate(`/forums/${forumName}`);
  };

  return (
    <C.Container>
      <C.ForumList>
        <C.ForumButton onClick={() => handleForumClick("dos-escribas")}>
          Fórum dos Escribas
        </C.ForumButton>
        <C.ForumButton onClick={() => handleForumClick("forum-geral")}>
          Fórum Geral
        </C.ForumButton>
        <C.ForumButton onClick={() => handleForumClick("forum-estudos")}>
          Fórum de Estudos
        </C.ForumButton>
        <C.ForumButton onClick={() => handleForumClick("forum-noticias")}>
          Fórum de Notícias do Reino
        </C.ForumButton>
      </C.ForumList>
      <C.ExitButton onClick={() => [signout(), navigate("/")]}>
        Sair
      </C.ExitButton>
    </C.Container>
  );
};

export default Forums;
