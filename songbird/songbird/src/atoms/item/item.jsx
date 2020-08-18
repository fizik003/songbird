import React, { Component } from 'react'

import './item.css';

export default class Item extends Component{


  render(){
    const {label, onItemSelected,selectItemId} = this.props
    
    return(
      <div className='item' onClick={(e)=>{
        onItemSelected(selectItemId,e)
      }}>
        <span></span> {label}
      </div>
    )
  }
}
