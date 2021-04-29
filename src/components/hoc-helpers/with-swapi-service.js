import React from 'react'
import { SwapiServiceConsumer } from '../swapi-service-context'

const withSwapiService = (mapMethdosToProps) => (Wrapper) => {
   return (props) => {
      return (
         <SwapiServiceConsumer>
            {
               (swapiService) => {
                  const serviceProps = mapMethdosToProps(swapiService)
                  return (
                     <Wrapper {...props} {...serviceProps} />
                  )
               }
            }
         </SwapiServiceConsumer>
      )     
   }
}

export default withSwapiService;
