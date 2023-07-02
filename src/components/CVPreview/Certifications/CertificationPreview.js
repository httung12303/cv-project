import React, { Component } from 'react';
import Section from '../Utils/Section';
import Item from '../Utils/Item';

export default class CertificationPreview extends Component {
  render() {
    const certifications = this.props.info;
    return (
      <Section title="Certifications" onEditBtnClick={this.props.onEditBtnClick}>
        {certifications.map((cert) => (
          <Item key={cert.id}>
            <div className="description">{cert.description}</div>
            <div>{cert.time}</div>
          </Item>
        ))}
      </Section>
    );
  }
}
