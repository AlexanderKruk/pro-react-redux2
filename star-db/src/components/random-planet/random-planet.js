import React from 'react';

import './random-planet.css';

const RandomPlanet = () => {
  return(
    <div className="random-planet jumbotron rounded">
      <img className="planet-image"
           src="https://starwars-visualguide.com/assets/img/planets/5.jpg"></img>
      <div>
        <h4>Planet Name</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>1 000 000</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>261</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>16 000</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RandomPlanet;