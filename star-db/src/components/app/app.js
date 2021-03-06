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
         StarshipsPage,
         LoginPage,
         SecretPage } from '../pages';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({ isLoggedIn: true })
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

    const { isLoggedIn } = this.state;

    if (this.state.hasError) {
      return  <ErrorIndicator />
    }

    return(
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Router>
              <Header onSeviceChange={this.onServiceChange}/>

              <RandomPlanet/>
              <Switch>
                <Route path='/' 
                      render={() => <h2>Welcome to StarDB</h2>}
                      exact/>
                <Route path='/planets'
                      render={() => <h2>Planets</h2>}
                      exact/>
                <Route path='/people/:id?' component={PeoplePage}/>
                <Route path='/planets' component={PlanetsPage}/>
                <Route path='/starships' component={StarshipsPage} exact/>
                <Route path='/starships/:id'
                      render={({match}) => {
                        const { id } = match.params
                        return <StarshipDetails id={id}/>
                      }}/>
                <Route path='/login'
                      render={() => {
                        return (
                          <LoginPage isLoggedIn={isLoggedIn}
                                    onLogin={this.onLogin}/>
                        );
                      }}/>
                <Route path='/secret'
                      render={() => {
                          return (
                            <SecretPage isLoggedIn={isLoggedIn}/>
                          );
                      }}/>
                <Route render = {() => <h2>Page not found</h2>}/>
              </Switch>
            </Router>
          </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};