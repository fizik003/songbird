import React,{Component} from 'react';

import './labelBird.css';


export default class LabelBird extends Component{
  render(){
    const {name} = this.props
    return(
      <div className='label-bird d-sm-block d-flex justify-content-center'>{name}</div>
    )
  }
}