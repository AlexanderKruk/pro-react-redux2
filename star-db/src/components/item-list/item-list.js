import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  SwapiService = new SwapiService();

  componentDidMount() {
    this.SwapiService
        .getAllPeople()
        .then((itemList) => {
          this.setState({ itemList });
        });
  };

  renderItem(arr) {
    return arr.map(({id, name}) => {
      return (
      <li className="list-group-item"
          key={id}
          onClick={ () => this.props.onChangeItem(id) }>
        { name }  
      </li>
      );
    });
  }

  render() {

    const { itemList } = this.state;

    if(!itemList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group">
        { this.renderItem(itemList) }
      </ul>
    );
  };
};