import React, {Component} from 'react';

import './score.css';

export default class Score extends Component{
  render(){
    const {score} = this.props
    return(
      <div className="score">
        <span className="score__name">Score:</span>
        <span className="score__value">{score}</span>
      </div>
    )
  }
}