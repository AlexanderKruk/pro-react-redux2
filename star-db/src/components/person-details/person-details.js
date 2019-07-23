import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class PersonDetails extends Component {

  SwapiService = new SwapiService();

  state = {
    selectedItem: null,
    loading: true
  }

  updateItem = () => {
    const { selectedId } = this.props;

    if(!selectedId) {
      return;
    }

    this.SwapiService
        .getPerson(selectedId)
        .then((selectedItem) => {
          this.setState({ selectedItem, loading: false })
        });
  }

  componentDidMount(){
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if(this.props.selectedId !== prevProps.selectedId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  render() {

    const {selectedItem, loading} = this.state

    if(!selectedItem) {
      return (
        <span>Select Item from list</span>
      );
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonView selectedItem={this.state.selectedItem}/> : null;

    return (
      <div className="person-details jumbotron rounded">
      { spinner }
      { content }
    </div>
    );
  }
}

const PersonView = ({ selectedItem: {id, name, gender, birthYear, eyeColor}}) => {
  return (
    <React.Fragment>
      <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="person"></img>
      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{ gender }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{ eyeColor }</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}