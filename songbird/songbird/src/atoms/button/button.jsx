import React,{ Component } from 'react';

import './button.css';

export default class Button extends Component{
  render(){
    const {disabled, onClick} = this.props
    let classes = "btn btn-secondary btn-lg btn-block";
    if (disabled) classes += ' btn-active';
    return(
      <div className="block-btn col-12">
        <button 
          type="button" 
          className={classes}
          disabled={!disabled}
          onClick={onClick}>
          Block level button
        </button>
      </div>
    )
  }
}