import React, { Component } from 'react';
import Section from '../Utils/Section';
import Item from '../Utils/Item';

export default class PrizePreview extends Component {
  render() {
    const prizes = this.props.info;
    return (
      <Section title="Prizes" onEditBtnClick={this.props.onEditBtnClick}>
        {prizes.map((prize) => (
          <Item key={prize.id}>
            <div className="description">{prize.description}</div>
            <div>{prize.time}</div>
          </Item>
        ))}
      </Section>
    );
  }
}
