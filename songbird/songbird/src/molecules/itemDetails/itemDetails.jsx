import React,{ Component } from 'react';

import './itemDetails.css';
import CustomAudioPlayer from '../audioPlayer/audioPlayer';
import BirdImg from '../../atoms/birdImg/birdImg';


export default class ItemDetails extends Component{
  render(){
    const {name, species, description,image, audio} = this.props.detailItem
    return(
      <div className="item-details jumbotron rounded col-12 col-lg-6 d-flex flex-column d-sm-block mb-0">
        <div className="item-details__content d-flex flex-column flex-sm-row align-items-center align-items-sm-start">
          
          <div className="mr-2 mb-2">
          <BirdImg srcImage={image}/>
          </div>
          <div className="item-details__player d-flex d-sm-block flex-column w-100 align-items-center">
            <h5>{name}</h5>
            <h6>{species}</h6>
            <CustomAudioPlayer 
              srcAudio={audio}
              autoPlay={false}
            />
          </div>
        </div>
        <div className="item-details__text">
          {description}
        </div>
      </div>
    )
  }
}