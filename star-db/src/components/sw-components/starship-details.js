import React from 'react';
import ItemDetails, { Record } from '../item-details';

import { SwapiServiceConsumer } from '../swapi-service-context';

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

export default StarshipDetails;