import React from 'react'
import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator';
import Spiner from '../spiner';
import './item-details.css'

const Record = ({ item, field, label }) => {
   if (item[field]) {
      return (
         <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
         </li>
      )
   }
   return null
   
}
export { Record };
export default class ItemDetails extends React.Component{
   swapiService = new SwapiService();
   state = {
      item: null,
      image: null,
      loading: false,
      error: false,
   }
   componentDidMount() {
      this.updateItem();      
   }
   componentDidUpdate(prevProps) {
      //! Если код как-то ведете к обновлению stаte
      //! ОБЯЗАТЕЛЬНО его нужно обернуть в условие
      //! Иначе будет бесконечный цыкл и браузер упадет
      if (this.props.itemId !== prevProps.itemId) {
         this.updateItem();
      }
   }
   onItemLoaded = () => {
      this.setState({   
         loading: false,
      })
   }
   onError = () => {
      this.setState({
         error: true,
         loading: false,
      });
   }
   updateItem() {
      this.setState({ loading: true });
      const { itemId, getData, getImageUrl } = this.props;      
      if (!itemId) {
         return;
      }
      
      getData(itemId)
         .then(async (item) => {
            this.setState( {
               item,
               image: await getImageUrl(item),
            })
         })
         .then(this.onItemLoaded)
         .catch(this.onError);
   }
   
   render() {
      const { item, loading, image, error } = this.state;
      if (!item) {
         return <span> Select an item from a list</span>
      }

      const hasData = !(loading || error);
      const errorMessge = error ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spiner /> : null;
      const content = hasData ? <ItemView item={item} image={image} children={ this.props.children}/> : null;
      
      return (
         <div className="item-details card">
            {errorMessge}
            {spinner}
            {content}            
         </div>
      )
   }
}

const ItemView = ({ item, image, children }) => {
   const { name } = item;
   
   return (
      <React.Fragment>
         
         <img className="item-image"
               src={image}
               alt="item"
            />

         <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
               {
                  React.Children.map(children, (child) => {
                     return React.cloneElement(child, { item });                     
                  })
               }
            </ul>
         </div>
      </React.Fragment>
   )
   
}