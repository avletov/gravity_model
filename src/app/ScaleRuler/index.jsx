import React, { PureComponent } from "react";

import { Container, Ruler, Value, Sup } from "./styles";

export class ScaleRuler extends PureComponent {
  render() {
    return (
      <Container>
        <Ruler />
        <Value>
          100
          <Sup></Sup> м
        </Value>
      </Container>
    );
  }
}
