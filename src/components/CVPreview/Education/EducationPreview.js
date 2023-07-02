import React, { Component } from 'react';
import Section from '../Utils/Section';
import Organization from '../Utils/Organization';

export default class EducationPreview extends Component {
  render() {
    const items = this.props.info;
    return (
      <Section title="Education" onEditBtnClick={this.props.onEditBtnClick}>
        {items.map((item) => (
          <Organization info={item} key={item.id} />
        ))}
      </Section>
    );
  }
}
