import React, {Component} from 'react';
import Row from '../row';

import { PersonList,
         PersonDetails,
        } from '../sw-components';


export default class PeoplePage extends Component {

  state = {
    selectedItem: 1
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  }

  render() {
    return (
      <Row left={<PersonList onItemSelected={this.onItemSelected}/>}
          right={<PersonDetails id={this.state.selectedItem} />}
       />
    );
  }
}