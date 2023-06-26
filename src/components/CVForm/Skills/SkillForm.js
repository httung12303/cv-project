import Form from '../Utils/Form';
import Input from '../Utils/Input';
import React, { Component } from 'react';
import Removable from '../Utils/Removable';
import uniqid from 'uniqid';

export default class SkillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...props.info],
    };
    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
  }
  onChange(e) {
    const container = e.currentTarget.parentNode.parentNode;
    const id = container.getAttribute('item-id');
    const name = e.currentTarget.value;
    const newItem = { id, name };
    this.setState({
      items: this.state.items.map((item) => (item.id === id ? newItem : item)),
    });
  }
  onDelete(e) {
    const id = e.currentTarget.parentNode.getAttribute('item-id');
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  }
  onAddBtnClick() {
    const newItem = {
      name: '',
      id: uniqid(),
    };
    this.setState({
      items: [...this.state.items, newItem],
    });
  }
  render() {
    const { onSubmit } = this.props;
    return (
      <Form title="Skills" onSubmit={() => onSubmit(this.state.items)}>
        {this.state.items.map((item, index) => (
          <Removable id={item.id} key={item.id} onDelete={this.onDelete}>
            <Input
              label={`#${index + 1}`}
              value={item.name}
              onChange={this.onChange}
            />
          </Removable>
        ))}
        <button type="button" onClick={this.onAddBtnClick}>
          Add
        </button>
      </Form>
    );
  }
}
