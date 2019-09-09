import React, { PureComponent } from "react";

import { Container, Button, StartButton, Menu, List, Item } from "./styles";
import {
  parametersDefault,
  parametersSolar,
  parametersAlphaCentauri,
  parametersAntares,
  parametersSirius
} from "../../mock/data";
import { objectClone } from "../../utils";

export class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isRunning: false, isShowMenu: false };
  }

  onClickStart = () => {
    const { run, stop } = this.props;
    const { isRunning } = this.state;

    isRunning ? stop() : run();

    this.setState(({ isRunning }) => ({
      isRunning: !isRunning
    }));
  };

  onClickAdd = () => {
    const { setNewBody } = this.props;

    setNewBody();
  };

  onClickReset = () => {
    const { isRunning } = this.state;
    const { setCustomData } = this.props;

    isRunning ? this.onClickStart() : null;
    setCustomData(objectClone(parametersDefault));
  };

  onClickSettings = () => {
    const { isRunning } = this.state;

    isRunning ? this.onClickStart() : null;

    this.setState(({ isShowMenu }) => ({
      isShowMenu: !isShowMenu
    }));
  };

  onClickMenuList = data => {
    const { setCustomData } = this.props;

    setCustomData(objectClone(data));

    this.setState({
      isShowMenu: false
    });
  };

  render() {
    const { isRunning, isShowMenu } = this.state;

    const dataList = [
      {
        name: "Солнечная система",
        data: parametersSolar,
        id: "parametersSolar"
      },
      {
        name: "Альфа Центавра",
        data: parametersAlphaCentauri,
        id: "parametersAlphaCentauri"
      },
      {
        name: "Антарес",
        data: parametersAntares,
        id: "parametersAntares"
      },
      {
        name: "Сириус",
        data: parametersSirius,
        id: "parametersSirius"
      }
    ];

    return (
      <Container>
        <StartButton onClick={this.onClickStart} isPressed={isRunning}>
          {isRunning ? "Пауза" : "Старт"}
        </StartButton>
        <Button onClick={this.onClickAdd}>Добавить</Button>
        <Button onClick={this.onClickReset}>Сброс</Button>
        <Button onClick={this.onClickSettings}>Настройки</Button>
        <Menu isShow={isShowMenu}>
          <List>
            {dataList.map(({ name, data, id }) => {
              return (
                <Item key={id} onClick={this.onClickMenuList.bind(null, data)}>
                  {name}
                </Item>
              );
            })}
          </List>
        </Menu>
      </Container>
    );
  }
}
