import styled from "styled-components";
import "antd/dist/antd.css";

export const MainContainer = styled.div`
  /* margin: 0 auto;
  max-width: 1200px; */
  width: 100%;
  padding-top: 60px;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

export const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;
