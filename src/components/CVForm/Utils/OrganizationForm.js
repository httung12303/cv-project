import React, { Component } from 'react';
import OrganizationInput from '../Utils/OrganizationInput';
import Form from './Form';
import AddBtn from './AddBtn';

export default class OrganizationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...props.info],
    };
    this.onChange = this.onChange.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.getItem = this.getItem.bind(this);
    this.createItem = this.createItem.bind(this);
  }
  getItem(e) {}
  createItem() {}
  onChange(e) {
    const newItem = this.getItem(e);
    const { id } = newItem;
    this.setState({
      items: this.state.items.map((item) => (item.id === id ? newItem : item)),
    });
  }
  onAddBtnClick() {
    this.setState({ items: [...this.state.items, this.createItem()] });
  }
  onDelete(e) {
    const id = e.currentTarget.parentNode.getAttribute('item-id');
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  }
  render() {
    if(!this.props.visibility) return null;
    return (
      <Form
        title={this.title}
        onSubmit={() => this.props.onSubmit(this.state.items)}
      >
        <div className="items-container">
          {this.state.items.map((item, index) => {
            const { id } = item;
            return (
              <OrganizationInput
                info={item}
                key={id}
                onChange={this.onChange}
                onDelete={this.onDelete}
                index={index}
              />
            );
          })}
        </div>
        <AddBtn onClick={this.onAddBtnClick}/>
      </Form>
    );
  }
}
