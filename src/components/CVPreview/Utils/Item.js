import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { children } = this.props;
    return <div className="item">{children}</div>;
  }
}
