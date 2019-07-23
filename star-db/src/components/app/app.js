import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

  state = {
    selectedItem: null
  }

  onChangeItem = (selectedItem) => {
    this.setState({ selectedItem });
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
            <PersonDetails selectedItem = { this.state.selectedItem }/>
          </div>
        </div>
      </div>
    );
  }
};