import React,{ Component } from 'react' ;
import Score from '../../atoms/score/score';
import './winComponent.css'
import Button from '../../atoms/button/button';
import Champion from '../../molecules/champion/champion';
export default class WinComponent extends Component{
  render(){
    const {score, onClick} = this.props
    if (score === 30){
      return <Champion onClick={onClick}/>
    }
    return(
      <div className="win-component col-12 text-center">
        <div className="jumbotron rounded">
          <h2 className='mb-4'>Поздравляем!</h2>
          <p className='mb-5' >Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
          <Button label={'Попробовать еще раз'} disabled={true} onClick={()=>{onClick()}} />
        </div> 
      </div>
    )
  }
}