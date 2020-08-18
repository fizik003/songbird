import React,{Component} from 'react';

import './audioSection.css';
import BirdImg from '../../atoms/birdImg/birdImg';
import CustomAudioPlayer from '../../molecules/audioPlayer/audioPlayer';
import LabelBird from '../../atoms/labelBird/labelBird';
import plugBird from '../../img/plug-bird.jpg';


export default class AudioSection extends Component{
  render(){

    const {dataAudio:{audio, name, image}, showInfoBird} = this.props
    const hidename = <p className='d-flex justify-content-center d-sm-block' style={{fontSize:'36px'}}>******</p>
    return(
      <div className="audio-section col-12">
        <div className='jumbotron rounded d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-start'>
          <div className="audio-section__bird-img mr-3">
            <BirdImg srcImage = {showInfoBird? image : plugBird}/>
          </div>
          <div className="audio-section_audio-player ">
            <LabelBird name = {showInfoBird? name: hidename} />
            <CustomAudioPlayer srcAudio={audio}/>
          </div>
        </div>
      </div>
    )
  }
}
