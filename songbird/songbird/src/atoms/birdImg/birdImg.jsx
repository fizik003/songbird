import React,{Component} from 'react';

import './birdImg.css';


export default class BirdImg extends Component{
  render(){
    const {srcImage} = this.props
    return(
      <img className='bird-img' src={srcImage} alt=""/>
    )
  }
}
