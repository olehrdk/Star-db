import React from 'react'
import PropTypes from 'prop-types'
import SwapiService from '../../services/swapi-service'

import ErrorIndicator from '../error-indicator';
import Spiner from '../spiner';
import './random-planet.css'

export default class RandomPlanet extends React.Component{
   
   swapiService = new SwapiService();
   state = {
      planet: {},
      image: null,
      loading: true,
      error: false,
   }
   componentDidMount() {
      const { updateInterval } = this.props;
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, updateInterval)
   }
   componentWillUnmount() {
      clearInterval(this.interval)
   }
   updatePlanet = () => {
      const id = Math.floor(Math.random() * 25 + 2);        
      this.swapiService
         .getPlanet(id)
         .then(async (planet) => {
             this.setState({
               planet,
               image: await this.swapiService.getPlanetImage(planet)
            })
         })
         .then(this.onPlanetLoaded)
         .catch(this.onError);
   }
   onPlanetLoaded = () => {
      this.setState({
         loading: false,
      });
   }
   onError = () => {
      this.setState({
         error: true,
         loading: false,
      });
   }

   render() {
      const { planet, image, loading, error } = this.state;
      const hasData = !(loading || error);

      const errorMessge = error ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spiner /> : null;
      const content = hasData ? <PlanetView planet={planet} image={image} /> : null;
      return (
         <div className="random-planet jumbotron rounded">
            {errorMessge}
            {spinner}
            {content}           
         </div>
      )
   }
}

RandomPlanet.defaultProps = {
   updateInterval: 10000
}
RandomPlanet.propTypes = {
   updateInterval: PropTypes.number
}

const PlanetView = ({ planet, image }) => {
   const { name, population, rotationPeriod, diameter } = planet;
   return (
      <React.Fragment>
          <div className="planet-image">
            <img 
               src={image}
               alt="random planet"
            />
         </div>
         
         <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <span className="term">Population: </span>
                  <span>{population}</span>
               </li>
               <li className="list-group-item">
                  <span className="term">Rotation Period: </span>
                  <span>{rotationPeriod}</span>
               </li>
               <li className="list-group-item">
                  <span className="term">Diameter: </span>
                  <span>{diameter}</span>
               </li>
            </ul>
         </div>         
      </React.Fragment>
   )
}