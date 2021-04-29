import React from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry'

import {LoginPage, PeoplePage, PlanetPage, SecretPage, StarshipPage} from '../pages'
import { SwapiServiceProvider } from '../swapi-service-context'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './app.css'
import { StarshipDetails } from '../sw-components'

export default class App extends React.Component{
   state = {
      isLoggedIn: false,
   }

   onLogin = () => {
      this.setState({
         isLoggedIn: true,
      })
   }
   swapiService = new SwapiService();
   
   render() {
      const { isLoggedIn } = this.state;
      return (
         <ErrorBoundry >
            <SwapiServiceProvider value={this.swapiService}>
               <Router>
                  <div className="container">

                     <Header />

                     <RandomPlanet updateInterval={10000} />
                     
                     <Switch>
                        <Route path="/"
                              render={() => <h2>Welcome to Star Database</h2>}
                              exact />
                        
                        <Route path="/people/:id?" component={PeoplePage} />
                        
                        <Route path="/planets" component={PlanetPage} />
                        
                        <Route path="/starships" component={StarshipPage} exact />                     
                        <Route path="/starships/:id"
                              render={({ match }) => {
                                 const { id } = match.params;
                                 return <StarshipDetails itemId={ id }/>
                           }} />
                        
                        <Route
                           path="/login"
                           render={() => {
                              return <LoginPage
                                 isLoggedIn={isLoggedIn}
                                 onLogin={ this.onLogin }/>
                           }}/>
                        <Route
                           path="/secret"
                           render={() => {
                              return <SecretPage
                                 isLoggedIn={ isLoggedIn }/>
                           }} />
                        
                        <Route render={ () => <h2>Page not Found</h2>}/>
                     </Switch>   
                  </div>
               </Router>
            </SwapiServiceProvider>
         </ErrorBoundry>
      )
   }
}
