import React, { Component } from 'react';

export default class GeneralItem extends Component {
  render() {
    const { value, iconClass } = this.props;
    return (
      <div className="general-item">
        <div className={iconClass} />
        <div>{value}</div>
      </div>
    );
  }
}
