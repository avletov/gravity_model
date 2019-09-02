import React, { Component } from "react";

import { Container, Panel, Main } from "./styles";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Panel>
          <Toolbar />
          <Form />
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
