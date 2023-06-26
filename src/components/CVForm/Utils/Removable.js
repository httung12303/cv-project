import React, { Component } from 'react';

export default class Removable extends Component {
  render() {
    const { id, onDelete, children } = this.props;
    return (
      <div item-id={id}>
        {children}
        <button type="button" onClick={onDelete}>
          Remove
        </button>
      </div>
    );
  }
}
