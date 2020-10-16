import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getAppointments } from "../../redux/actions/appointments";
import { getOneUser } from "../../redux/actions/users";
import { MainWrapper } from "./styled";

const PsiPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getOneUser(login.user.id));
    dispatch(getAppointments());
    history.push(`/psi/consultas/${login.user.id}`);
  }, []);

  return (
    <MainWrapper>
      <p>Home do psicólogo</p>
    </MainWrapper>
  );
};

export default PsiPage;
