import React,{Component} from 'react';
import './header.css';
import Logo from '../../atoms/logo/logo';
import Score from '../../atoms/score/score';
import Navigation from '../../molecules/navigation/navigation';


export default class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="header__wrapper">
          <div className="header__top d-flex justify-content-between align-items-center mb-3">
            <Logo/>
            <Score/>
          </div>
          <div className="header__navigation">
            <Navigation/>
          </div>
        </div>
    </div>
    )
  }
}
