import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { label, value, onChange } = this.props;
    return (
      <div className="input">
        <label>{label}</label>
        <input type='text' value={value} onChange={onChange} />
      </div>
    );
  }
}
