import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { Record } from '../item-details/item-details';

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

    const itemDetails = (
      <ErrorBoundry>
       <ItemDetails getData={this.SwapiService.getPerson}
                   selectedId = {this.state.selectedId}
                   getImageUrl = {this.SwapiService.getImagePerson}>
         <Record field="gender" label="Gender"/>
         <Record field="eyeColor" label="Eye Color"/>
       </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={itemDetails} />
    );
  };
}