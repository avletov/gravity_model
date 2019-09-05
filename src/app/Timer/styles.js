import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: 10px;
  right: 50px;
  z-index: 4;

  & > div:nth-child(n) {
    font-size: 16px;
    color: wheat;
  }
`;

export const Years = styled.div`
  min-width: 80px;
`;

export const Days = styled.div`
  width: 70px;
`;

export const Time = styled.div``;
