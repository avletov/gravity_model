import styled from "styled-components";

const COLOR = "rgb(180, 180, 180)";
const COLOR_SUCCESS = "rgb(180, 230, 180)";
const COLOR_DANGER = "rgb(230, 180, 180)";

const BG = "rgb(80, 80, 80)";
const BG_SUCCESS = "rgb(80, 130, 80)";
const BG_DANGER = "rgb(130, 80, 80)";

const BG_HOWER = "rgb(120, 120, 120)";
const BG_SUCCESS_HOWER = "rgb(80, 170, 80)";
const BG_DANGER_HOWER = "rgb(170, 80, 80)";

const BG_ACTIVE = "rgb(140, 140, 140)";
const BG_SUCCESS_ACTIVE = "rgb(80, 190, 80)";
const BG_DANGER_ACTIVE = "rgb(190, 80, 80)";

const SHADOW = "rgb(100, 100, 100)";
const SHADOW_SUCCESS = "rgb(100, 200, 100)";
const SHADOW_DANGER = "rgb(200, 100, 100)";

export const Container = styled.div`
  position: fixed;
  display: flex;
  width: 315px;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(40, 40, 40);
  z-index: 2;
`;

export const Button = styled.button`
  padding-bottom: 1%;
  min-width: 60px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-family: "Open Sans";
  font-size: 14px;
  color: ${COLOR};
  background-color: ${BG};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${BG_HOWER};
  }

  &:active {
    background-color: ${BG_ACTIVE};
    box-shadow: 0px 0px 3px ${SHADOW};
  }
`;

export const StartButton = styled(Button)`
  color: ${({ isPressed }) => (isPressed ? COLOR_DANGER : COLOR_SUCCESS)};
  background-color: ${({ isPressed }) => (isPressed ? BG_DANGER : BG_SUCCESS)};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ isPressed }) =>
      isPressed ? BG_DANGER_HOWER : BG_SUCCESS_HOWER};
  }

  &:active {
    background-color: ${({ isPressed }) =>
      isPressed ? BG_DANGER_ACTIVE : BG_SUCCESS_ACTIVE};
    box-shadow: 0px 0px 3px
      ${({ isPressed }) => (isPressed ? SHADOW_DANGER : SHADOW_SUCCESS)};
  }
`;

export const Menu = styled.nav`
  display: ${({ isShow }) => (isShow ? "flex" : "none")}
  position: absolute;
  top: 50px;
  width: 300px;
  min-height: 100px;
  padding: 3%;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: rgb(120, 120, 120);
  z-index: 10;

  & > :nth-child(n) {
    width: 97%;
  }
`;

export const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;

  & > :nth-child(n) {
    min-height: 30px;
  }
`;

export const Item = styled.li`
  display: flex;
  padding: 0px 5px;
  align-items: center;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgb(150, 150, 150);
  }
`;
