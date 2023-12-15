import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Recovery from "../pages/Recovery";
import Forum from "../pages/Forum/foruns";
import GeralForum from "../pages/Forum/GeralForum";
import EscribasForum from "../pages/Forum/EscribasForum";
import NoticiasForum from "../pages/Forum/NoticiasForum";
import EstudosForum from "../pages/Forum/EstudosForum";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/forum" element={<Private Item={Forum} />}>
            <Route path="geral" element={<GeralForum />} />
            <Route path="escribas" element={<EscribasForum />} />
            <Route path="noticias" element={<NoticiasForum />} />
            <Route path="estudos" element={<EstudosForum />} />
          </Route>
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
