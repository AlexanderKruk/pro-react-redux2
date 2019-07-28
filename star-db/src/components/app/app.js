import React, { Component } from 'react';

import Header from '../header';
// import RandomPlanet from '../random-planet';
// import ErrorButton from '../error-button';
// import PeoplePage from '../people-page';

import ErrorIndicator from '../error-indicator';
import ItemDetails from '../item-details';
import Row from '../row';

import SwapiService from '../../services/swapi-service';

import './app.css';
import ErrorBoundry from '../error-boundry';

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

    const personDetails = (
      <ItemDetails getData={this.SwapiService.getPerson}
                   selectedId = {5}
                   getImageUrl = {this.SwapiService.getImagePerson}/>
    );

    const starshipDetails = (
      <ItemDetails getData={this.SwapiService.getStarship}
                   selectedId = {11}
                   getImageUrl = {this.SwapiService.getImageStarship} />
    );

    return(
        <ErrorBoundry>
          <Header />
          {/* <RandomPlanet />
          <div className="row mb2 button-row">
            <ErrorButton />
          </div>
          <PeoplePage /> */}
          <Row left={personDetails} right={starshipDetails} />
      </ErrorBoundry>
    );
  }
};