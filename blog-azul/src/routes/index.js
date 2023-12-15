import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Recovery from "../pages/Recovery";
import Forum from "../pages/Forum/foruns";
import GeralForum from "../pages/Forum/GeralForum";
import EscribasForum from "../pages/Forum/EscribasForum";
import NoticiasForum from "../pages/Forum/NoticiasForum";
import EstudosForum from "../pages/Forum/EstudosForum";

const PrivateRoute = ({ element }) => {
  return element;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/forum" element={<Forum />}>
            <Route path="geral" element={<PrivateRoute element={<GeralForum />} />} />
            <Route path="escribas" element={<PrivateRoute element={<EscribasForum />} />} />
            <Route path="noticias" element={<PrivateRoute element={<NoticiasForum />} />} />
            <Route path="estudos" element={<PrivateRoute element={<EstudosForum />} />} />
          </Route>
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
