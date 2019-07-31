import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

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

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const PersonList = withSwapiService(withData(
                   withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const StarshipList = withSwapiService(withData(
                     withChildFunction(ItemList, renderNameAndLenght)), mapStarshipMethodsToProps);

const PlanetList = withSwapiService(withData(
                   withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);

export {
  PersonList,
  StarshipList,
  PlanetList
}

