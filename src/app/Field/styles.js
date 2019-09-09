import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
`;

export const Body = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(calc(-50% + ${props => props.transform.translateX}px))
    translateY(calc(-50% + ${props => props.transform.translateY}px));
  transform-style: preserve-3d;
  width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  border-radius: ${props => props.radius}px;
  background-color: ${props => props.color};
  z-index: 1;
  &::before {
    content: "";
    display: ${props => (props.isStar ? "block" : "none")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) translateZ(-1px);
    width: ${props => props.radius * 10}px;
    height: ${props => props.radius * 10}px;
    border-radius: ${props => props.radius * 10}px;
    background: radial-gradient(
      ${props => props.color} 5%,
      ${props => props.shadowColor} 10%,
      rgb(0, 0, 0, 0) 70%
    );
    z-index: 0;
  }
`;
