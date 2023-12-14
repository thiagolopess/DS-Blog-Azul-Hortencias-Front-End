import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Recovery from "../pages/Recovery";
import Forums from "../pages/Forums/forums";
const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Private Item={Home} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recovery" element={<Recovery />} />
        {/* Adicione a rota para os fóruns */}
        <Route path="/forums/*" element={<Forums />} />
        {/* Rota padrão - redirecione para o login se a rota não for reconhecida */}
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
