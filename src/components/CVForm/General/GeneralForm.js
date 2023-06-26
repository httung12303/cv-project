import React, { Component } from 'react';
import Input from '../Utils/Input';
import Form from '../Utils/Form';

export default class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.info,
    };
    this.onChangeFunction = this.onChangeFunction.bind(this);
  }
  onChangeFunction(field) {
    return (e) => {
      const newState = {};
      newState[field] = e.currentTarget.value;
      this.setState(newState);
    };
  }
  render() {
    const { name, title, birthday, phone, email, address, link } = this.state;
    const onSubmit = this.props.onSubmit;
    return (
      <Form title={'General'} onSubmit={() => onSubmit(this.state)}>
        <Input
          label="Name"
          value={name}
          onChange={this.onChangeFunction('name')}
        />
        <Input
          label="Title"
          value={title}
          onChange={this.onChangeFunction('title')}
        />
        <Input
          label="Birthday"
          value={birthday}
          onChange={this.onChangeFunction('birthday')}
        />
        <Input
          label="Phone"
          value={phone}
          onChange={this.onChangeFunction('phone')}
        />
        <Input
          label="Email"
          value={email}
          onChange={this.onChangeFunction('email')}
        />
        <Input
          label="Link"
          value={link}
          onChange={this.onChangeFunction('link')}
        />
        <Input
          label="Address"
          value={address}
          onChange={this.onChangeFunction('address')}
        />
      </Form>
    );
  }
}
