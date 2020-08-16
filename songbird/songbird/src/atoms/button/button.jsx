import React,{ Component } from 'react';

import './button.css';

export default class Button extends Component{
  render(){
    const {disabled} = this.props
    let classes = "btn btn-secondary btn-lg btn-block";
    if (disabled) classes += ' btn-active';
    return(
      <button 
        type="button" 
        className={classes}
        disabled={!disabled}>
          Block level button
      </button>
    )
  }
}