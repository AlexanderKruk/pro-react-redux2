import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                    withData(
                      withChildFunction(renderName)(
                        ItemList)));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                      withData(
                        withChildFunction(renderNameAndLenght)( 
                          ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                    withData(
                      withChildFunction(renderName)(
                        ItemList)));

export {
  PersonList,
  StarshipList,
  PlanetList
}

