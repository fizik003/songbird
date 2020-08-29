import React,{Component} from 'react';

import './navigation.css';


export default class Navigation extends Component{
  
  state={
    activeID : 0
  }

  // componentDidUpdate(){
  //   const {selectNavItem} = this.props

  //   this.setState({activeID: selectNavItem})
  // }
  render(){
    const {selectNavItem,listMenu} = this.props
    
    const {activeID} = this.state
    
    const readyList = listMenu.map((el,index)=>{
      return(
      <li key={el} className={`list-group-item nav-item   ${index === selectNavItem? 'active': null} `}>{el}</li>
      )
    })


    return (
      <div className="navigation">
        <ul className="list-group list-group-horizontal d-flex flex-wrap flex-lg-nowrap">
          {readyList}
        </ul>
      </div>
    )
  }
}