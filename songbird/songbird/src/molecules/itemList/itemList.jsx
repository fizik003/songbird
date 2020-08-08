import React,{ Component } from 'react';

import './itemList.css';


export default class ItemList extends Component{
  render(){
    let items = [
      'bird1',
      'bird2',
      'bird3',
    ]

    items = items.map((el, index)=>{
      return(
        <li key={index} className='list-group-item'>
          {el}
        </li>
      )
    })
    return(
      <div className="item-list">
        <ul className='list-group'>
          {items}
        </ul>
      </div>
    )
  }
}