import React,{Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audioPlayer.css';

export default class CustomAudioPlayer extends Component{
  render(){
    return (
      <div className="custom-audio-player">
        <AudioPlayer
        src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
        onPlay={e => console.log("onPlay")}
        />
      </div>
    ) 
  }

}
