import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  padding-top: 60px;
  box-sizing: border-box;
`;

export const Section = styled.section`
  padding-bottom: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: rgb(80, 80, 80);

  & > div:nth-child(1) {
    height: 30px;
  }

  & > div:last-child {
    height: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  padding-left: 30px;
  align-items: center;
  font-family: "Open+Sans", sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: rgb(180, 180, 180);
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: 15px;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: ${props => props.color};
  }
`;

export const ParametersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
`;

export const Parameter = styled.div`
  display: flex;
  padding: 2px 5px;
  flex-direction: column;
  justify-content: center;

  & > :nth-child(1) {
    height: 20px;
  }

  & > :nth-child(2) {
    height: 23px;
    width: 70px;
  }
`;

export const Name = styled.label`
  margin-bottom: 1px;
  text-align: center;
  font-size: 14px;
  color: rgb(180, 180, 180);
`;

export const Code = styled.sub`
  font-size: 11px;
`;

export const Power = styled.sup`
  font-size: 11px;
`;

export const Value = styled.input`
  margin-bottom: 1px;
  text-align: center;
  border: none;
  border-radius: 4px;
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: rgb(50, 50, 50);
  background-color: rgb(160, 160, 160);
  outline: none;

  &:focus {
    background-color: rgb(200, 200, 200);
  }
`;
