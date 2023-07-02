import React, { Component } from 'react';
import Input from '../Utils/Input';
import Form from '../Utils/Form';
import TextArea from '../Utils/TextArea';

export default class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.info,
    };
    this.onChangeFunction = this.onChangeFunction.bind(this);
    this.onImgChange = this.onImgChange.bind(this);
  }
  onChangeFunction(field) {
    return (e) => {
      const newState = {};
      newState[field] = e.currentTarget.value;
      this.setState(newState);
    };
  }
  onImgChange(e) {
    const target = e.currentTarget;
    const avatar = target.files[0];
    this.setState({ avatar: avatar || null });
  }
  render() {
    if (!this.props.visibility) return null;
    const {
      name,
      title,
      birthday,
      sex,
      phone,
      email,
      address,
      link,
      introduction,
    } = this.state;
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
          label="Sex"
          value={sex}
          onChange={this.onChangeFunction('sex')}
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
        <TextArea
          label="Introduction"
          value={introduction}
          onChange={this.onChangeFunction('introduction')}
        />
        <div className="input">
          <label>Avatar</label>
          <input type="file" accept="image/*" onChange={this.onImgChange} />
        </div>
      </Form>
    );
  }
}
