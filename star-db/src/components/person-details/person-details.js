import React from 'react';

import './person-details.css';

const PersonDetails = () => {
  return (
    <div className="person-details jumbotron rounded">
    <img className="person-image"
         src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
         alt="person"></img>
    <div className="card-body">
      <h4>Planet Name</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Gender</span>
          <span>1 000 000</span>
        </li>
        <li className="list-group-item">
          <span className="term">Birth Year</span>
          <span>261</span>
        </li>
        <li className="list-group-item">
          <span className="term">Eye Color</span>
          <span>16 000</span>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default PersonDetails;