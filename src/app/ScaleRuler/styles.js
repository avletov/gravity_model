import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 50px;
  width: 100px;
  flex-direction: column;
  align-items: center;
`;

export const Ruler = styled.div`
  width: 100px;
  height: 2px;
  background-color: rgb(50, 50, 50);
  border: 1px solid rgb(100, 100, 100);
`;

export const Value = styled.div`
  font-size: 16px;
  color: wheat;
`;

export const Sup = styled.sup`
  font-size: 14px;
  color: wheat;
`;
