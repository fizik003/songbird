import React,{ Component } from 'react';

import './itemDetails.css';
import CustomAudioPlayer from '../audioPlayer/audioPlayer';
import BirdImg from '../../atoms/birdImg/birdImg';


export default class ItemDetails extends Component{
  render(){
    return(
      <div className="item-details jumbotron rounded">
        <div className="item-details__content d-flex">
          <BirdImg/>
          <div className="item-details__player">
            <h3>gnbxrf</h3>
            <CustomAudioPlayer/>
          </div>
        </div>
        <div className="item-details__text">
          fdsfdsfdsfdsfdsfsd
          fdsdsgsdgfdsgsdfg
          gdfsgfdsgfds
          gdfsgdsfg
          gfdsgsdfgsd
        </div>
      </div>
    )
  }
}