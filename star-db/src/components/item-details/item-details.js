import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({item, label, field}) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ field }</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  SwapiService = new SwapiService();

  state = {
    selectedItem: null,
    loading: true,
    imageUrl: null
  }

  updateItem = () => {
    const { selectedId, getData, getImageUrl } = this.props;

    if(!selectedId) {
      return;
    }

        getData(selectedId)
        .then((selectedItem) => {
          this.setState({ selectedItem,
                          loading: false,
                          imageUrl: getImageUrl })
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
    const content = !loading ? <ItemView selectedItem={this.state.selectedItem}
                                         imageUrl={this.state.imageUrl}
                                         listItem={React.Children.map(this.props.children , (child, idx) => <li>{idx}</li>)}/> : null;

    return (
      <div className="item-details jumbotron rounded">
      { spinner }
      { content }
    </div>
    );
  }
}

const ItemView = ({ selectedItem: { id, name, gender, birthYear, eyeColor}, imageUrl, listItem }) => {
  console.log(imageUrl(id));
  return (
    <React.Fragment>
      <img className="item-image"
          src={ imageUrl(id) }
          alt="item"></img>
      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          { listItem }
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
}