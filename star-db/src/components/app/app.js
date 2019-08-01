import React, { Component } from 'react';

import Header from '../header';

import ErrorIndicator from '../error-indicator';

import SwapiService from '../../services/swapi-service';

import './app.css';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import DummySwapiService from '../../services/dummy-swapi-service';
import RandomPlanet from '../random-planet';

import { PeoplePage,
         PlanetsPage,
         StarshipsPage } from '../pages';

import { BrowserRouter as Router, Route} from 'react-router-dom';

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
            <Router>
              <Header onSeviceChange={this.onServiceChange}/>

              <RandomPlanet/>

              <Route path='/people' component={PeoplePage}/>
              <Route path='/planets' component={PlanetsPage}/>
              <Route path='/starships' component={StarshipsPage}/>
            </Router>
          </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};