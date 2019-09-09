import React, { Component } from "react";

import { Container, Panel, Main } from "./styles";

import { Toolbar } from "./Toolbar";
import { Form } from "./Form";
import { Field } from "./Field";
import { Timer } from "./Timer";
import { ScaleRuler } from "./ScaleRuler";

import { parametersDefault } from "../mock/data";
import {
  objectClone,
  getParamsForNewBody,
  calcNewCoordsAndSpeeds,
  getNewScaleAndPosition,
  getNewPosition
} from "../utils";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: objectClone(parametersDefault) };
  }

  physicalConstantsUpdate = (name, value) => {
    this.setState(
      state => (state.data.physicalConstants[name] = Number(value))
    );
  };

  bodiesPhysicalUpdate = (code, name, value) => {
    this.setState(
      state => (state.data.bodies[code - 1].physical[name] = Number(value))
    );
  };

  onChange = (event, code, name) => {
    const value = event.target.value;

    code
      ? this.bodiesPhysicalUpdate(code, name, value)
      : this.physicalConstantsUpdate(name, value);
  };

  run = () => {
    this.timerID = setInterval(() => {
      this.setState(state => ({
        data: calcNewCoordsAndSpeeds(state.data, 40)
      }));
    }, 40);
  };

  stop = () => {
    clearInterval(this.timerID);
  };

  setNewBody = () => {
    const { bodies } = this.state.data;
    const index = bodies.length;

    this.setState(state => (bodies[index] = getParamsForNewBody(index + 1)));
  };

  setCustomData = customData => {
    this.setState(state => (state.data = customData));
  };

  changeScale = () => {
    const { common } = this.state.data;
    const newParams = getNewScaleAndPosition(common, event);

    this.setState(
      state => (
        (common.scale = newParams.scale),
        (common.posX = newParams.posX),
        (common.posY = newParams.posY)
      )
    );
  };

  changePosition = () => {
    const { common } = this.state.data;
    const newParams = getNewPosition(common, event);

    this.setState(
      state => ((common.posX = newParams.posX), (common.posY = newParams.posY))
    );
  };

  render() {
    const { data } = this.state;
    const { time, scale } = data.common;

    return (
      <Container>
        <Panel>
          <Toolbar
            run={this.run}
            stop={this.stop}
            setNewBody={this.setNewBody}
            setCustomData={this.setCustomData}
          />
          <Form data={data} onChange={this.onChange} />
        </Panel>
        <Main>
          <Field
            data={data}
            changeScale={this.changeScale}
            changePosition={this.changePosition}
          />
          <Timer timeInMilliseconds={time} />
          <ScaleRuler scale={scale} />
        </Main>
      </Container>
    );
  }
}
