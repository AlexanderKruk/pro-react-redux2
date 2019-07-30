import React from 'react';
import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({id}) => {
  return (
    <SwapiServiceConsumer>
    {
      ({getPerson, getImagePerson}) => {
        return (
          <ItemDetails getData={getPerson}
                       selectedId = {id}
                       getImageUrl = {getImagePerson}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
          </ItemDetails>
        );
      }
    }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ({id}) => {
  return (
    <SwapiServiceConsumer>
    {
      ({getStarship, getImageStarship}) => {
        return (
          <ItemDetails getData={getStarship}
                       selectedId = {id}
                       getImageUrl = {getImageStarship}>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
          </ItemDetails>
        );
      }
    }
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({id}) => {
  return (
    <SwapiServiceConsumer>
    {
      ({getPlanet, getImagePlanet}) => {
        return (
          <ItemDetails getData={getPlanet}
                       selectedId = {id}
                       getImageUrl = {getImagePlanet}>
            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
          </ItemDetails>
        );
      }
    }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
}