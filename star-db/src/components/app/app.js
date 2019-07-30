import React, { Component } from 'react';

import Header from '../header';
import { PersonList,
         PlanetList, 
         StarshipList,
         PersonDetails,
         PlanetDetails,
         StarshipDetails } from '../sw-components';

import ErrorIndicator from '../error-indicator';

import SwapiService from '../../services/swapi-service';


import './app.css';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';

export default class App extends Component {

  SwapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return  <ErrorIndicator />
    }

    return(
        <ErrorBoundry>
          <SwapiServiceProvider value={this.SwapiService}>
            <Header />
            {/* <RandomPlanet />
            <div className="row mb2 button-row">
              <ErrorButton />
            </div> */}
            <PersonDetails id={10} />
            <PlanetDetails id={10} />
            <StarshipDetails id={10} />
            {/* <PersonList/> */}
            {/* <StarshipList/>
            <PlanetList/> */}
          </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};