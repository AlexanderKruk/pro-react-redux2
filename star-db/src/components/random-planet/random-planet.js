import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';


export default class RandomPlanet extends Component {

  SwapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  constructor() {
    console.log("constructor()");
    super();
    setInterval(this.updatePlanet, 10000);
  }

  componentDidMount() {
    console.log("componentDidMount()")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()")
  }

  onPlanetLoaded = (planet) => {
    this.setState({ 
       planet,
       loading: false,
       error: false 
      });
  }

  onError = (err) => {
    this.setState({
      loading: false,
      error: true
    });
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()*25 + 2);
    this.SwapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
  }

  render() {
    console.log("render()");
    const { planet, loading, error } = this.state;

    const hadLoaded = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hadLoaded ? <PlanetView planet={planet}/> : null;

    return(
      <div className="random-planet jumbotron rounded">
        { errorMessage }
        { spinner }
        { content }
      </div>
    );
  };
};

const PlanetView = ({planet}) => {

  const { id, name, population,
    rotationPeriod, diameter } = planet;

  return(
    <React.Fragment>
        <img className="planet-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="planet"></img>
        <div>
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{ population }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span> { rotationPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
}