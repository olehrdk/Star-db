import icon from './death-star.png';
export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img'
 
   getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
 
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }
 
  getAllPeople = async() => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }
 
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`)
    return this._transformPerson(person);
  }
 
  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return  await res.results.map( this._transformPlanet);
  }
 
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return  this._transformPlanet(planet);
  }
 
  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }
 
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  
  _extractId = (item) => {    
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1]
  }
  
  getImage = async (link) => {    
    return  fetch(link)
      .then(res => {
        if (!res.ok) {
          throw new Error()
        }
        return res.url;
      })      
      .catch(() => icon)
  }
  
  getPersonImage = async ({ id }) => {
    return await this.getImage(`${this._imageBase}/characters/${id}.jpg`)
  }
  getStarshipImage =async ({ id }) => {
    return await this.getImage(`${this._imageBase}/starships/${id}.jpg`)
  }
  getPlanetImage = async ({ id }) => {
    return await this.getImage(`${this._imageBase}/planets/${id}.jpg`)
  }
  _transformPlanet = (planet) => {
     const id = this._extractId(planet);
    return {
      id,    
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }    
  }
  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person) => {    
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}
 