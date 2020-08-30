import React,{ Component } from 'react';

import './navIte.css';


export default class NavItem extends Component{
  render(){
    const {label} = this.props
    return(
    <li className="list-group-item nav-item">{label}</li>
    )
  }
}