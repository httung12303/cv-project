import React, {Component} from 'react';

export default class AddBtn extends Component {
  render() {
    return <button type='button' className='add-btn' onClick={this.props.onClick}>Add</button>
  }
}