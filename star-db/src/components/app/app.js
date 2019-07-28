import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

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
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onChangeItem = { this.onChangeItem }
                      getData = {this.SwapiService.getAllPeople}
                      renderItem = {({name, gender, birthYear}) => (`${name} (${gender}, ${birthYear})`)} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedId = { this.state.selectedId }/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onChangeItem = { this.onChangeItem }
                      getData = {this.SwapiService.getAllPlanets}
                      renderItem = {(item) => (item.name)} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedId = { this.state.selectedId }/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onChangeItem = { this.onChangeItem }
                      getData = {this.SwapiService.getAllStarships}
                      renderItem = {(item) => (item.name)} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedId = { this.state.selectedId }/>
          </div>
        </div>

      </div>
    );
  }
};