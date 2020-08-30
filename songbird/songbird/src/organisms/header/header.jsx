import React,{Component} from 'react';
import './header.css';
import Logo from '../../atoms/logo/logo';
import Score from '../../atoms/score/score';
import Navigation from '../../molecules/navigation/navigation';
import Switch from '../../atoms/switch/switch';


export default class Header extends Component{
  render(){
    const {selectNavItem,score, listMenu,changeDificul} = this.props
    return(
      <div className="header col-12 col-sm-12 mb-4">
        <div className="header__wrapper">
          <div className="header__top d-flex justify-content-between align-items-center mb-3">
            <Logo/>
            {/* <div className="switch mr-2 ml-auto">
              <Switch changeDificul={changeDificul}/>
            </div> */}
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
