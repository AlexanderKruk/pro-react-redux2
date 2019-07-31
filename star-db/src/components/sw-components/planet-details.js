import React from 'react';
import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';

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

export default PlanetDetails;