import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "../components/footer";
import Login from "../pages/login";
import PsychologistPage from "../pages/psychologist-page";
import Register from "../pages/register";
import Search from '../pages/search'

const Routes = (props) => {
  const token = useSelector((state) => state.login.token);
  const access = useSelector((state) => state.login.user.is_psic);

  return (
    <Switch>
      {token &&
        (!access ? (
          // logado como paciente
          <Switch>
            {/* <Route path="/blog">Blog</Route> */}
            <Route path={["/login", "/register"]}>
              <Redirect to="/" />
            </Route>

            <Route path="/">
              Home Logado
              <Footer />
            </Route>
          </Switch>
        ) : (
          // logado como psicologo
          <Switch>
            <Route path="/">
              <PsychologistPage />
              <Footer />
            </Route>
          </Switch>
        ))}

      {/* não logado */}
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
      <Route path="/buscar">
        <Search />
      </Route>

      <Route path="/">
        Home <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;
