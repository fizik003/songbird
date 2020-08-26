import React,{Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audioPlayer.css';

export default class CustomAudioPlayer extends Component{
  render(){
    const {srcAudio,autoPlay} = this.props
    return (
      <div className="custom-audio-player">
        <AudioPlayer
        src={srcAudio}
        autoPlayAfterSrcChange = {autoPlay}
        onPlay={e => console.log("onPlay")}
        showJumpControls ={false}
        />
      </div>
    ) 
  }

}
