import React,{ Component } from 'react';

import './itemDetails.css';
import CustomAudioPlayer from '../audioPlayer/audioPlayer';
import BirdImg from '../../atoms/birdImg/birdImg';


export default class ItemDetails extends Component{
  render(){
    const {name, species, description,image, audio} = this.props.detailItem
    return(
      <div className="item-details jumbotron rounded">
        <div className="item-details__content d-flex">
          <BirdImg srcImage={image}/>
          <div className="item-details__player">
            <h3>{name}</h3>
            <h4>{species}</h4>
            <CustomAudioPlayer srcAudio={audio}/>
          </div>
        </div>
        <div className="item-details__text">
          {description}
        </div>
      </div>
    )
  }
}