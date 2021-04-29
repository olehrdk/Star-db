import React from 'react';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator'

const withData = (View) => {
   return class extends React.Component {
      state = {
         data: null,
         hasError: false,
         loading: true,
      }
   
      componentDidMount() {
         this.update();      
      }
      update() {
         this.setState({
            loading: true,
            error: false,
         });

         this.props.getData()
            .then((data) => {
               this.setState({
                  data,
                  loading: false,
               })
            })
            .catch(() => {
               this.setState({
                  hasError: true,
                  loading: false,
               })
            })
      }
      render(){
         const { data, hasError, loading } = this.state;
         if (loading) {
            return (
               <div className="card item-list-loading">
                  <Spiner />
               </div>   
            )
         }
         if (hasError) {
            return <ErrorIndicator />
         }

         return <View {...this.props} data={data} />
      }
   }   
}

export default withData;