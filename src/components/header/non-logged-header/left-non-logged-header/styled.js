import styled from "styled-components";

import logo from "../../assets/mobile-menu/logo-branco.png";

export const StyledLeftNonLoggedHeader = styled.div`
  background-color: #70a3ef;
  width: auto;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  div {
    margin-left: 15px;
    margin-right: 15px;
  }

  .logo {
    height: 50px;
    width: 126px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${logo});
    background-size: cover;
  }

  .logo:hover {
    cursor: pointer;
    transition: 0.4s;
    scale: 0.8;
  }

  .links {
    height: 100%;
    color: #f3f3f3;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .links:hover {
    transition: 0.4s;
    scale: 0.8;
  }
`;
