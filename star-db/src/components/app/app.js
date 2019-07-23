import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

  state = {
    selectedId: 5
  }

  onChangeItem = (selectedId) => {
    this.setState({ selectedId });
  }

  render() {
    return(
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onChangeItem = { this.onChangeItem } />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedId = { this.state.selectedId }/>
          </div>
        </div>
      </div>
    );
  }
};