import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './people-page.css';

export default class PeoplePage extends Component {

  state = {
    selectedId: 5,
    hasError: false
  }

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({ hasError: true });
  }

  onChangeItem = (selectedId) => {
    this.setState({ selectedId });
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
    <div className="row mb2">
          <div className="col-md-6">
            <ItemList onChangeItem = { this.onChangeItem } />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedId = { this.state.selectedId }/>
          </div>
    </div>
    );
  };
}