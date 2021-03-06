import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import { usr_urls, psi_urls } from "../";
import Button from "../../../components/button";
import { useWindowSize } from "../../../hooks/index";
import { login } from "../../../redux/actions/login/action";
import { Container } from "./styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const where = useLocation().pathname;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const chosenPsi = useSelector((state) => state.login.chosenPsi);

  const handleInputChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, history, !!chosenPsi));
  };

  return (
    <Container width={width}>
      {width > 950 ? (
        <div className="small-header">
          <div className="logo-holder" onClick={() => history.push("/")} />
        </div>
      ) : (
        <></>
      )}

      <div className="lower-form">
        <h1>Entrar</h1>

        <div className="login">
          <span
            className={usr_urls.some((e) => e === where) && "usr"}
            onClick={() => history.push("/login")}>
            Sou Paciente
          </span>
          <span
            className={psi_urls.some((e) => e === where) && "psi"}
            onClick={() => history.push("/login/psi")}>
            Sou Psicólogo
          </span>
        </div>

        <div className="form-holder">
          <form>
            <input type="email" placeholder="E-mail" value={email} onChange={handleInputChange} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button width="175px" height="40px" buttonName="Entrar" onClick={handleSubmit} />
          </form>
          <span className="register">
            Não é cadastrado?{" "}
            <span
              className="link-register"
              onClick={() => {
                usr_urls.some((e) => e === where) && history.push("/cadastro");
                psi_urls.some((e) => e === where) && history.push("/cadastro/psi");
              }}>
              Crie sua conta!
            </span>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
