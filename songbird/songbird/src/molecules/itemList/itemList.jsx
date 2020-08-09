import React,{ Component } from 'react';
// import birdsData from '../../serviceAndData/birdsData'
import './itemList.css';


export default class ItemList extends Component{

  render(){
    const {dataItmeList} = this.props
    const items = dataItmeList
    .map(({name,id}, index)=>{
      return(
        <li  key={id} onClick={()=>this.props.onItemSelected(index)}  className='list-group-item'>
          {name}
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