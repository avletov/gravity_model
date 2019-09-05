import React, { Component } from "react";

import {
  Container,
  Section,
  Header,
  ParametersContainer,
  Parameter,
  Name,
  Code,
  Power,
  Value
} from "./styles";

import { getUnitOfMeasurement, numberFormatter } from "../../utils";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { isFocus: false };
  }

  formatData = data => {
    let result = [];

    Object.keys(data).forEach(name => result.push({ name, value: data[name] }));

    return result;
  };

  renderSection = ({ title, code, params }) => {
    const { bodies } = this.props.data;
    const key = code ? code.toString() : "common";

    return (
      <Section key={key}>
        {title && <Header color={bodies[code - 1].color}>{title}</Header>}
        <ParametersContainer>
          {params.map(parameter => this.renderParameter(code, parameter))}
        </ParametersContainer>
      </Section>
    );
  };

  renderParameter = (code, { name, value }) => {
    const { onChange } = this.props;
    const { isFocus } = this.state;
    const key = code ? name + code.toString() : name;

    return (
      <Parameter key={key}>
        <Name>
          {name}
          {code ? <Code>{code}</Code> : ""}
          {getUnitOfMeasurement(name)}
        </Name>
        <Value
          value={numberFormatter(name, value, isFocus)}
          onChange={event => onChange(event, code, name)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </Parameter>
    );
  };

  onFocus = () => {
    this.setState(state => (state.isFocus = true));
  };

  onBlur = () => {
    this.setState(state => (state.isFocus = false));
  };

  render() {
    const { physicalConstants, bodies } = this.props.data;

    const physicalConstantsParams = {
      params: this.formatData(physicalConstants)
    };

    return (
      <Container>
        {this.renderSection(physicalConstantsParams)}
        {bodies.map(({ name, number, physical }) => {
          const bodyParams = {
            title: name,
            code: number,
            params: this.formatData(physical)
          };

          return this.renderSection(bodyParams);
        })}
      </Container>
    );
  }
}
