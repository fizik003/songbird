import React,{ Component } from 'react' ;
import Score from '../../atoms/score/score';
import './winComponent.css'
import Button from '../../atoms/button/button';
export default class WinComponent extends Component{
  render(){
    const {score, onClick} = this.props
    return(
      <div className="win-component col-12 text-center">
        <div className="jumbotron rounded">
          <h1 className='mb-4'>Поздравляем!</h1>
          <p className='mb-5' >Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
          <Button label={'Попробовать еще раз'} disabled={true} onClick={()=>{onClick()}} />
        </div> 
      </div>
    )
  }
}