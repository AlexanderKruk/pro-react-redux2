import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  render() {

    const { onAddItem } = this.props;

    return(
      <form className="item-add-form d-flex"
            onSubmit={ this.onSubmit }>
        <input type="text"
               className="form-control"
               onChange={ this.onLabelChange }
               placeholder="New task"/>
        <button className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}