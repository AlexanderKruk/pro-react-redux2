import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {

  SwapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
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
        <PeoplePage />
      </div>
    );
  }
};