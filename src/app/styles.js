import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  font-family: "Roboto";

  & > div:nth-child(1) {
    height: 100%;
    width: 315px;
  }
`;

export const Panel = styled.div`
  background-color: rgb(60, 60, 60);
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
`;
