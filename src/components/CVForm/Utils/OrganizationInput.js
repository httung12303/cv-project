import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Removable from './Removable';

export default class OrganizationInput extends Component {
  render() {
    const { title, major, time, organization, description, id } =
      this.props.info;
    const onChange = this.props.onChange;
    return (
      <Removable id={id} onDelete={this.props.onDelete}>
        <h3>{`#${this.props.index + 1}`}</h3>
        {title !== undefined ? (
          <Input label="Title" value={title} onChange={onChange} />
        ) : (
          <Input label="Major" value={major} onChange={onChange} />
        )}
        <Input label="Time" value={time} onChange={onChange} />
        <Input
          label={title !== undefined ? 'Company' : 'Institution'}
          value={organization}
          onChange={onChange}
        />
        <TextArea label="Description" value={description} onChange={onChange} />
      </Removable>
    );
  }
}
