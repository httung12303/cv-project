import React, {Component} from 'react';

export default class Form extends Component {
  render() {
    const {title, onSubmit, children} = this.props;
    return (
      <div className="form-container">
        <form>
          <h2>{title}</h2>
          {children}
          <button type="button" onClick={onSubmit} className='submit-btn'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}