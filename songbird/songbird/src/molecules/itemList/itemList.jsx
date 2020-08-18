import React,{ Component } from 'react';
// import birdsData from '../../serviceAndData/birdsData'
import './itemList.css';
import Item from '../../atoms/item/item';


export default class ItemList extends Component{
  render(){
    const {dataItmeList, onItemSelected} = this.props
    const items = dataItmeList
    .map(({name}, index)=>{
      return(
        <li key ={name} className="list-group-item my-list-group-item">
          <Item label ={name} 
            onItemSelected={onItemSelected}
            selectItemId={index}/>
        </li>
      )
    })
    return(
      <div className="mb-3 col-12 col-sm-12 col-lg-6 mb-lg-0 ">
        <ul className='list-group'>
          {items}
        </ul>
      </div>
    )
  }
}