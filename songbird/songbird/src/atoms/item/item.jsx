import React, { Component } from 'react'

import './item.css';

export default class Item extends Component{
  state = {
    typeAnswer:0,
    ttt:2
  }

  changeStatusItem =()=>{
    const {selectItemId, randomBirdId} = this.props
    if(selectItemId === randomBirdId){
      this.setState({typeAnswer:2})
    }else{
      this.setState({typeAnswer:1})
    }
  }
  render(){
    const {label, onItemSelected,selectItemId} = this.props
    const {typeAnswer} = this.state
    const classes = typeAnswer > 1? 'item right': typeAnswer === 1? 'item wrong' : 'item'
    return(
      <div className={classes} onClick={()=>{
        this.changeStatusItem()
        onItemSelected(selectItemId)
      }}>
        <span></span> {label}
      </div>
    )
  }
}
