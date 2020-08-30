import React,{Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audioPlayer.css';
import { createRef } from 'react';

export default class CustomAudioPlayer extends Component{
  constructor(){
    super()
    this.player = createRef()
  }

  stop=()=>{
    this.player.current.audio.current.pause()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.autoPlay != this.props.autoPlay){
      this.stop()
    }
  }
  render(){
    const {srcAudio,autoPlay} = this.props
    return (
      <div className="custom-audio-player">
        <AudioPlayer
        src={srcAudio}
        autoPlayAfterSrcChange = {false}
        onPlay={e => console.log("onPlay")}
        showJumpControls ={false}
        ref={this.player}
        />
      </div>
    ) 
  }

}
