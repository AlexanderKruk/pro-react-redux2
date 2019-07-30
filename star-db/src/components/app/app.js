import React, { Component } from 'react';

import Header from '../header';
import { PersonList,
         PlanetList, 
         StarshipList,
         PersonDetails,
         PlanetDetails,
         StarshipDetails } from '../sw-components';
// import RandomPlanet from '../random-planet';
// import ErrorButton from '../error-button';
// import PeoplePage from '../people-page';
// import ItemList from '../item-list';

import ErrorIndicator from '../error-indicator';

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
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return  <ErrorIndicator />
    }

    return(
        <ErrorBoundry>
          <Header />
          {/* <RandomPlanet />
          <div className="row mb2 button-row">
            <ErrorButton />
          </div> */}
          <PersonDetails id={7} />
          <PlanetDetails id={7} />
          <StarshipDetails id={9} />
          <PersonList>
            {(i) => (`${i.name}`)}
          </PersonList>
          <PlanetList>
            {(i) => (`${i.name}`)}
          </PlanetList>
          <StarshipList>
            {(i) => (`${i.name}`)}
          </StarshipList>
      </ErrorBoundry>
    );
  }
};