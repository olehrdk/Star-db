import React from 'react'
import ItemList from '../item-list'
import {
   withData,
   withSwapiService,
   withChildrenFunction,
   compose,
} from '../hoc-helpers'


const renderName = ({ name }) => <span>{name}</span>
const renderNameAndBirth = ({name, birthYear}) => <span>{name} ({birthYear})</span>
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
   return { getData: swapiService.getAllPeople, }
}
const mapPlanetMethodsToProps = (swapiService) => {
   return { getData: swapiService.getAllPlanets, }
}
const mapStarshipMethodsToProps = (swapiService) => {
   return { getData: swapiService.getAllStarships, }
}
const PersonList = compose(
                     withSwapiService(mapPersonMethodsToProps),
                     withData,
                     withChildrenFunction(renderNameAndBirth),
                  )(ItemList)

const PlanetList = compose(
                     withSwapiService(mapPlanetMethodsToProps),
                     withData,
                     withChildrenFunction(renderName),
                  )(ItemList)

const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildrenFunction(renderNameAndModel),
                     )(ItemList)

export {
   PersonList,
   PlanetList,
   StarshipList,
}