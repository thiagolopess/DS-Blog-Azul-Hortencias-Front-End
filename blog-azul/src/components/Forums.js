// pages/forums.js
import React from "react";
import { useParams } from "react-router-dom";

const Forums = () => {
  const { forumName } = useParams();


  const renderForumContent = () => {
    switch (forumName) {
      case "dos-escribas":
        return <DosEscribasForum />;
      case "forum-geral":
        return <ForumGeral />;
      case "forum-estudos":
        return <ForumEstudos />;
      case "forum-noticias":
        return <ForumNoticias />;
      default:
        return <div>Fórum não encontrado</div>;
    }
  };

  return (
    <div>
      <h2>Fórum: {forumName}</h2>
      {renderForumContent()}
    </div>
  );
};

const DosEscribasForum = () => {
  return <div>Conteúdo do Fórum dos Escribas</div>;
};

const ForumGeral = () => {
  return <div>Conteúdo do Fórum Geral</div>;
};

const ForumEstudos = () => {
  return <div>Conteúdo do Fórum de Estudos</div>;
};

const ForumNoticias = () => {
  return <div>Conteúdo do Fórum de Notícias do Reino</div>;
};

export default Forums;
