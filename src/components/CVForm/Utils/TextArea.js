import React, { Component } from 'react';

export default class TextArea extends Component {
  render() {
    const {label, value, onChange} = this.props;
    return (
      <div className="input">
        <label>{label}</label>
        <textarea value={value} onChange={onChange}>
        </textarea>
      </div>
    );
  }
}
