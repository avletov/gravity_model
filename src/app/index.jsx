import React, { Component } from "react";

import { Container, Panel, Main } from "./styles";

import { Toolbar } from "./Toolbar";
import { Form } from "./Form";
import { Field } from "./Field";
import { Timer } from "./Timer";
import { ScaleRuler } from "./ScaleRuler";

import { parametersDefault } from "../mock/data";
import { objectClone } from "../utils";

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

  render() {
    const { data } = this.state;
    return (
      <Container>
        <Panel>
          <Toolbar />
          <Form data={data} onChange={this.onChange} />
        </Panel>
        <Main>
          <Field />
          <Timer />
          <ScaleRuler />
        </Main>
      </Container>
    );
  }
}
