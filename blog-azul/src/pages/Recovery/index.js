import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Recovery = () => {
  const { recoverPassword } = useAuth();
  //const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRecovery = async () => {
    try {
      const res = await recoverPassword(email);

      if (res) {
        setError(res);
        setSuccessMessage("");
      } else {
        setSuccessMessage(`Um e-mail de recuperação foi enviado para ${email}`);
        setError("");
      }
    } catch (error) {
      setError("Erro ao enviar e-mail de recuperação");
      setSuccessMessage("");
    }
  };

  return (
    <C.Container>
      <C.Label>Sistema Alvorecer Feudal</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Qual o seu e-mail para recuperação da sua senha?"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError(""), setSuccessMessage("")]}
        />
        <C.labelError>{error}</C.labelError>
        <C.labelSuccess>{successMessage}</C.labelSuccess>
        <Button Text="Enviar" onClick={handleRecovery} />
        <C.LabelSignin>
          Lembrou da senha?
          <C.Strong>
            <Link to="/signin">&nbsp;Faça login</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Recovery;