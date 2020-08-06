import React, {Component} from 'react';

import './score.css';

export default class Score extends Component{
  render(){
    return(
      <div className="score">
        <span className="score__name">Score:</span>
        <span className="score__value">10</span>
      </div>
    )
  }
}