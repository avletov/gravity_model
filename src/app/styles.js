import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  font-family: "Open Sans";
  overflow: hidden;

  & > div:nth-child(1) {
    height: 100%;
    width: 315px;
    flex-shrink: 0;
  }
`;

export const Panel = styled.div`
  background-color: rgb(60, 60, 60);
  overflow: auto;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
`;
