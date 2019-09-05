import React, { PureComponent } from "react";

import { Container, Years, Days, Time } from "./styles";

export class Timer extends PureComponent {
  render() {
    return (
      <Container>
        <Years>Годы: 0</Years>
        <Days>Дни: 0</Days>
        <Time>00:00:00.000</Time>
      </Container>
    );
  }
}
