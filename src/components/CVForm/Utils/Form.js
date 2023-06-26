import React, {Component} from 'react';

export default class Form extends Component {
  render() {
    const {title, onSubmit, children} = this.props;
    return (
      <form>
        <h2>{title}</h2>
        {children}
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </form>
    )
  }
}