import React,{Component} from 'react';
import './header.css';
import Logo from '../../atoms/logo/logo';
import Score from '../../atoms/score/score';
import Navigation from '../../molecules/navigation/navigation';


export default class Header extends Component{
  render(){
    const {selectNavItem,score, listMenu} = this.props
    return(
      <div className="header col-12 col-sm-12 mb-4">
        <div className="header__wrapper">
          <div className="header__top d-flex justify-content-between align-items-center mb-3">
            <Logo/>
            <Score score={score}/>
          </div>
          <div className="header__navigation">
            <Navigation  
              selectNavItem={selectNavItem}
              listMenu ={listMenu}
            />
          </div>
        </div>
    </div>
    )
  }
}
