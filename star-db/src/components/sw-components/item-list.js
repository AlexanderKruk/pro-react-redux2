import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';

import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { getAllPeople,
        getAllPlanets,
        getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return(
    <Wrapped {...props}>
      {fn}
    </Wrapped>
    );
  }
};

const renderName = (i) => (`${i.name}`);
const renderNameAndLenght = (i) => (`${i.name} (${i.length}m)`);

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);

const StarshipList = withData(withChildFunction(ItemList, renderNameAndLenght), getAllStarships);

const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);

export {
  PersonList,
  StarshipList,
  PlanetList
}

