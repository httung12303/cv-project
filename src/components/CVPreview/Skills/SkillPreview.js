import React, { Component } from 'react';
import Section from '../Utils/Section';

export default class SkillPreview extends Component {
  render() {
    const skills = this.props.info;
    return (
      <Section title="Skills" onEditBtnClick={this.props.onEditBtnClick}>
        {skills.map((skill) => (
          <div className="skill" key={skill.id}>
            {skill.name}
          </div>
        ))}
      </Section>
    );
  }
}
