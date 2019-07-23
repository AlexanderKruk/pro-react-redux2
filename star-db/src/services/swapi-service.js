export default class SwapiService {

  _urlBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error(`Server not have this source in ${url}` +
                      ` status ${res.status}`);
    }
    
    const body = await res.json();
    return body;  
  }
  
  async getAllPeople() {
    const res = await this.getResource(`${this._urlBase}/people`);
    return res.results.map(this._trasformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`${this._urlBase}/people/${id}`);
    return this._trasformPerson(person);
  }

  async getAllStarships() {
    const res = await this.getResource(`${this._urlBase}/starships`);
    return res.results.map(this._tranformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`${this._urlBase}/starships/${id}`);
    return this._tranformStarship(starship);
  }

  async getAllPlanets() {
    const res = await this.getResource(`${this._urlBase}/planets`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`${this._urlBase}/planets/${id}`);
    return this._transformPlanet(planet);
  }

  _extractId(item) {
    const regExp = /\/(\d*)\/$/;
    return item.url.match(regExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
      }
  }

  _tranformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passangers: starship.passangers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _trasformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}
