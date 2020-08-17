import React,{ Component } from 'react';
// import birdsData from '../../serviceAndData/birdsData'
import './itemList.css';
import Item from '../../atoms/item/item';


export default class ItemList extends Component{
  s = 5;
  render(){
    const {dataItmeList, onItemSelected,randomBirdId} = this.props
    const items = dataItmeList
    .map(({name,id}, index)=>{
      
      return(
        <li key ={name} className="list-group-item">
          <Item label ={name} 
            onItemSelected={onItemSelected}
            randomBirdId={randomBirdId}
            selectItemId={index}/>
            
        </li>
      )
    })
    return(
      <div className="col-6">
        <ul className='list-group'>
          {items}
        </ul>
      </div>
    )
  }
}