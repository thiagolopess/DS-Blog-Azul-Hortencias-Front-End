import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.BLabel>BEM-VINDO!</C.BLabel>
      <C.TLabel>Bem-vindo ao Blog Azul Hortênsia, o epicentro da interação no Reino Alvorecer Feudal! Nossa missão é estreitar os laços entre os usuários deste vasto reino, trazendo-lhes as mais recentes novidades e eventos. Aqui, você encontrará um fórum de perguntas e respostas, uma página dedicada a sanar suas dúvidas mais profundas sobre a vida no reino.</C.TLabel>
      <C.Label>Forum Alvorecer Feudal</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
        <C.LabelSignup>
          Esqueceu sua senha?
          <C.Strong>
            <Link to="/recovery">&nbsp;Recupere aqui</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
