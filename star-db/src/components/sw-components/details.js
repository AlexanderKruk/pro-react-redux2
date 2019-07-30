import React from 'react';
import ItemDetails, { Record } from '../item-details';

import SwapiService from '../../services/swapi-service';

const {
  getPerson,
  getPlanet,
  getStarship,
  getImagePerson,
  getImagePlanet,
  getImageStarship
} = new SwapiService();


const PersonDetails = ({id}) => {
  return (
    <ItemDetails getData={getPerson}
                  selectedId = {id}
                  getImageUrl = {getImagePerson}>
      <Record field="gender" label="Gender"/>
      <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
  );
};

const StarshipDetails = ({id}) => {
  return (
    <ItemDetails getData={getStarship}
                 selectedId = {id}
                 getImageUrl = {getImageStarship}>
      <Record field="length" label="Length"/>
      <Record field="costInCredits" label="Cost"/>
    </ItemDetails>
  );
};

const PlanetDetails = ({id}) => {
  return (
    <ItemDetails getData={getPlanet}
                 selectedId = {id}
                 getImageUrl = {getImagePlanet}>
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  );
};

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
}