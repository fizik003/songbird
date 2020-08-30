import React, {Component} from 'react';
import Switch from 'react-switch';

import './switch.css';

export default class MySwitch extends Component{
  constructor(){
    super();
    this.state = {checked: true};
  }

  handleChange = (checked)=>{
    this.props.changeDificul(checked)
    this.setState({checked})
  }

  render(){
    return(
      <label className='d-flex align-items-center mb-0'>
        <span className='mr-2'>Hard</span>
        <Switch onChange={ this.handleChange} checked={this.state.checked} height={20} width={40} />
      </label>
    )
  }
}