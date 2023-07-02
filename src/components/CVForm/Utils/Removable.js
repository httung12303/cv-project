import React, { Component } from 'react';

export default class Removable extends Component {
  render() {
    const { id, onDelete, children } = this.props;
    return (
      <div item-id={id} className='removable'>
        {children}
        <button type="button" className='remove-btn' onClick={onDelete}>
          X
        </button>
      </div>
    );
  }
}
