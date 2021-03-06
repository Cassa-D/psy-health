/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useHistory } from "react-router-dom";

import { StyledLeftNonLoggedHeader } from "./styled";

const LeftNonLoggedHeader = () => {
  const history = useHistory();
  return (
    <StyledLeftNonLoggedHeader>
      <div className="logo" onClick={() => history.push("/")} />
      <div className="links" onClick={() => history.push("/buscar")}>
        Encontre um psicólogo
      </div>
      <div className="links" onClick={() => history.push("/login/psi")}>
        Sou psicólogo
      </div>
    </StyledLeftNonLoggedHeader>
  );
};

export default LeftNonLoggedHeader;
