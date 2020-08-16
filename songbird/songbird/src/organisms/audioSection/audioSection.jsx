import React,{Component} from 'react';

import './audioSection.css';
import BirdImg from '../../atoms/birdImg/birdImg';
import CustomAudioPlayer from '../../molecules/audioPlayer/audioPlayer';
import LabelBird from '../../atoms/labelBird/labelBird';


export default class AudioSection extends Component{
  render(){
    const {dataAudio:{audio, name, image}, showInfoBird} = this.props
    console.log(showInfoBird)
    const hidename = <p style={{fontSize:'36px'}}>******</p>
    return(
      <div className="audio-section">
        <div className='jumbotron rounded d-flex'>
          <div className="audio-section__bird-img mr-3">
          <BirdImg srcImage = {showInfoBird? image : null}/>
          </div>
          <div className="audio-section_audio-player">
            <LabelBird name = {showInfoBird? name: hidename} />
            <CustomAudioPlayer srcAudio={audio}/>
          </div>
        </div>
      </div>
    )
  }
}
