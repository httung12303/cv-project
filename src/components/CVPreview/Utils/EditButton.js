import React, { Component } from 'react';

export default class EditButton extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onClick} className='edit-btn'>
        Edit
      </button>
    );
  }
}
