import React, { Component } from 'react';
import EditButton from './EditButton';

export default class Section extends Component {
  render() {
    const { title, children, onEditBtnClick } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        <div className="content">{children}</div>
        <EditButton onClick={onEditBtnClick} />
      </section>
    );
  }
}
