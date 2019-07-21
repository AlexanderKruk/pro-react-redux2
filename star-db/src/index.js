class SwapiService {

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
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`${this._urlBase}/people/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResource(`${this._urlBase}/starships`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`${this._urlBase}/starships/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`${this._urlBase}/planets`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`${this._urlBase}/planets/${id}`);
  }

}

const swapi = new SwapiService();

swapi.getPlanet(3).then((p) => {
  console.log(p.name);
});
