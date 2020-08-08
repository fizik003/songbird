import React,{Component} from 'react';

import './audioSection.css';
import BirdImg from '../../atoms/birdImg/birdImg';
import CustomAudioPlayer from '../../molecules/audioPlayer/audioPlayer';
import LabelBird from '../../atoms/labelBird/labelBird';


export default class AudioSection extends Component{
  render(){
    return(
      <div className="audio-section">
        <div className='jumbotron rounded d-flex'>
          <div className="audio-section__bird-img mr-3">
          <BirdImg/>
          </div>
          <div className="audio-section_audio-player">
            <LabelBird/>
            <CustomAudioPlayer/>
          </div>
        </div>
      </div>
    )
  }
}
