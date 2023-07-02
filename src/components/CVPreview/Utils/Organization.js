import React, { Component } from 'react';

export default class Organization extends Component {
  render() {
    const { major, title, time, organization, description } = this.props.info;
    return (
      <div className="organization-item">
          <div>
            <h3>{major || title}</h3>
            <div>{time}</div>
          </div>
          <div>
            <h3 className='organization-name'>{organization}</h3>
            <div className='description'>{description}</div>
          </div>
      </div>
    );
  }
}
