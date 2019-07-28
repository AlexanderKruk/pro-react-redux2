import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../item-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {

  SwapiService = new SwapiService();

  state = {
    selectedId: 5
  }

  onChangeItem = (selectedId) => {
    this.setState({ selectedId });
  }

  render() {

    const itemList = ( 
      <ItemList onChangeItem = { this.onChangeItem }
              getData = {this.SwapiService.getAllPeople}>
        {(i) => (`${i.name} (${i.birthYear})`)}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails selectedId = { this.state.selectedId }/>
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  };
}