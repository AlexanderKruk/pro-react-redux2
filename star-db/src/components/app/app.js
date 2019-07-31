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
import DummySwapiService from '../../services/dummy-swapi-service';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  }

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return  <ErrorIndicator />
    }



    return(
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Header onSeviceChange={this.onServiceChange}/>
            {/* <RandomPlanet />
            <div className="row mb2 button-row">
              <ErrorButton />
            </div> */}
            <PersonDetails id={2} />
            <PlanetDetails id={2} />
            <StarshipDetails id={2} />
            <PersonList/>
            <StarshipList/>
            <PlanetList/>
          </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};