import React, { PureComponent } from "react";

import { Container, Ruler, Value, Sup } from "./styles";
import { getParamsForRuler } from "../../utils";

export class ScaleRuler extends PureComponent {
  render() {
    const { scale } = this.props;
    const { scaleValue, rulerWidth } = getParamsForRuler(scale);
    const { value, power, unit } = scaleValue;

    return (
      <Container>
        <Ruler width={rulerWidth} />
        <Value>
          {value}
          <Sup>{power ? power : ""}</Sup> {unit}
        </Value>
      </Container>
    );
  }
}
