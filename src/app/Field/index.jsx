import React, { Component } from "react";

import { Container, Body } from "./styles";

import { getBodyPosition, getBodyRadius } from "../../utils";

export class Field extends Component {
  constructor(props) {
    super(props);
    this.state = { isMoving: false };
  }

  onMouseDown = () => {
    this.setState({ isMoving: true });
  };

  onMouseUp = () => {
    this.setState({ isMoving: false });
  };

  onMouseMove = event => {
    const { changePosition } = this.props;
    this.state.isMoving ? changePosition(event) : null;
  };

  onWheel = event => {
    const { changeScale } = this.props;
    changeScale(event);
  };

  render() {
    const { bodies, common } = this.props.data;
    const { scale } = common;

    return (
      <Container
        id="field"
        onWheel={this.onWheel}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
      >
        {bodies.map(body => {
          const { name, radius, isStar, color, shadowColor } = body;

          const translate = getBodyPosition(body, common);
          const scaledRadius = getBodyRadius(radius, scale);

          const key = name;

          return (
            <Body
              key={key}
              title={name}
              transform={translate}
              radius={scaledRadius}
              isStar={isStar}
              color={color}
              shadowColor={shadowColor}
            />
          );
        })}
      </Container>
    );
  }
}
