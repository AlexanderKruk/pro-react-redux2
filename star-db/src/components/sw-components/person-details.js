import React from 'react';
import ItemDetails, { Record } from '../item-details';

import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ({id, swapiService}) => {
  const {getPerson, getImagePerson} = swapiService;
        return (
          <ItemDetails getData={getPerson}
                       selectedId = {id}
                       getImageUrl = {getImagePerson}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
          </ItemDetails>
        );
};

export default withSwapiService(PersonDetails);