import React,{ Component } from 'react';

import './button.css';

export default class Button extends Component{
  render(){
    return(
      <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
    )
  }
}