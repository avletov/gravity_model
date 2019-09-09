import React, { PureComponent } from "react";

import { Container, Years, Days, Time } from "./styles";

import { getTimeByMilliseconds, timeFormatter } from "../../utils";

export class Timer extends PureComponent {
  render() {
    const { timeInMilliseconds } = this.props;
    const time = getTimeByMilliseconds(timeInMilliseconds);

    const years = time.years;
    const days = time.days;
    const hours = timeFormatter(time.hours);
    const minutes = timeFormatter(time.minutes);
    const seconds = timeFormatter(time.seconds);
    const ms = timeFormatter(time.ms, "ms");

    return (
      <Container>
        <Years>Годы: {years}</Years>
        <Days>Дни: {days}</Days>
        <Time>
          {hours}:{minutes}:{seconds}.{ms}
        </Time>
      </Container>
    );
  }
}
