import React,{Component} from 'react';

import './navigation.css';


export default class Navigation extends Component{
  
  state={
    activeID : 0
  }
  render(){
    const listMenu = [
      'Разминка',
      'Воробьиные',
      'Лесные птицы',
      'Певчие птицы',
      'Хищные птицы',
      'Морские птицы'
    ]
    const {activeID} = this.state

    const readyList = listMenu.map((el,index)=>{
      return(
      <li key={index} className={`list-group-item  ${index === activeID? 'active': null} `}>{el}</li>
      )
    })


    return (
      <div className="navigation">
        <ul className="list-group list-group-horizontal">
          {readyList}
        </ul>
      </div>
    )
  }
}