import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {

  state = {
    selectedId: 5,
    showRandomPlanet: true,
    hasError: false
  }

  onChangeItem = (selectedId) => {
    this.setState({ selectedId });
  }

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return  <ErrorIndicator />
    }

    return(
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2 button-row">
          <ErrorButton />
        </div>
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