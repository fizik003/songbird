import React,{ Component } from 'react';

import './rowContent.css';
import ItemList from '../../molecules/itemList/itemList';
import ItemDetails from '../../molecules/itemDetails/itemDetails';


export default class RowContent extends Component{
  render(){
    return(
      <div className="row-content d-flex">
        <ItemList/>
        <ItemDetails/>
      </div>
    )
  }
}