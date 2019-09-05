import React, { PureComponent } from "react";

import { Container, Button, StartButton, Menu, List, Item } from "./styles";

export class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isRunning: false, isShowMenu: false };
  }

  onClickStart = () => {
    this.setState(state => ({
      isRunning: !state.isRunning
    }));
  };

  onClickSettings = () => {
    this.setState(state => ({
      isShowMenu: !state.isShowMenu
    }));
  };

  render() {
    const { isRunning, isShowMenu } = this.state;

    return (
      <Container>
        <StartButton onClick={this.onClickStart} isPressed={isRunning}>
          {isRunning ? "Пауза" : "Старт"}
        </StartButton>
        <Button>Добавить</Button>
        <Button>Сброс</Button>
        <Button onClick={this.onClickSettings}>Настройки</Button>
        <Menu isShow={isShowMenu}>
          <List>
            <Item>1 пункт меню</Item>
            <Item>2 пункт меню</Item>
            <Item>3 пункт меню</Item>
            <Item>4 пункт меню</Item>
            <Item>5 пункт меню</Item>
          </List>
        </Menu>
      </Container>
    );
  }
}
