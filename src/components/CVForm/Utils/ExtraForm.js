import React, { Component } from 'react';
import Form from './Form';
import Input from './Input';
import Removable from './Removable';
import uniqid from 'uniqid';

export default class ExtraForm extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [...props.info] };
    this.createItem = this.createItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getItem = this.getItem.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onChange(e) {
    const newItem = this.getItem(e);
    const { id } = newItem;
    this.setState({
      items: this.state.items.map((item) => (item.id === id ? newItem : item)),
    });
  }
  getItem(e) {
    const container = e.currentTarget.parentNode.parentNode;
    const id = container.getAttribute('item-id');
    const [description, time] = Array.from(
      container.querySelectorAll('input[type="text"]')
    ).map((input) => input.value);
    return { description, time, id };
  }
  createItem() {
    return {
      description: '',
      time: '',
      id: uniqid(),
    };
  }
  onAddBtnClick() {
    this.setState({ items: [...this.state.items, this.createItem()] });
  }
  onDelete(e) {
    const id = e.currentTarget.parentNode.getAttribute('item-id');
    const items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  }
  render() {
    const { onSubmit } = this.props;
    return (
      <Form title={this.title} onSubmit={onSubmit}>
        {this.state.items.map(({ description, time, id }, index) => (
          <Removable id={id} onDelete={this.onDelete} key={id}>
            <h3>{`#${index + 1}`}</h3>
            <Input label="Description" value={description} onChange={this.onChange} />
            <Input label="Time" value={time} onChange={this.onChange} />
          </Removable>
        ))}
        <button type="button" onClick={this.onAddBtnClick}>
          Add
        </button>
      </Form>
    );
  }
}
