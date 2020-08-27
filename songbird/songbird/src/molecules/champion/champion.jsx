import React, { Component } from 'react';

import './champion.css'
import Button from '../../atoms/button/button';


export default class Champion extends Component{
  render(){
    const{onClick} = this.props
    return(
      <div className="champion col-12">
          <div className="col-12 d-flex justify-content-center mb-3">
            <img className='img-fluid' src="https://avatars.mds.yandex.net/get-pdb/34158/06432e93-68b3-43d4-9d08-9ea3a7768404/orig" alt="" />
          </div>
          <p className='champion__congratulations'> Поздравляю, ты завершил викторину с максимальным результатом!</p>
          <div className='champion__scroe mb-3' >30/30</div>
          <p className='champion__text'> Именное поэтому тебе присваивается звание птичного гения.</p>
          <div className="champion__list d-flex justify-content-center mb-5">
          <ul>
            <li>Теперь ты без проблем определишь птицу по ее голосу.</li>
            <li>Теперь ты можешь устраивать романтическое свидание и рассказывать своей девушке (парню) где какая птичка</li>
            <li>Теперь ты можешь спорить с друзьями, что отгадаешь какой птичке пренадлежит тот или иной голос.</li>
            <li> Теперь твои возможности безграничны.</li>
          </ul>
          </div>
          <div className="champion__repeate col-12">
            <div className="champion__repeate-text mb-4">
              Звание и твои новые способности это конечно хорошо, но мы то знаем, что повторение - мать учения. Подтверди свои знания. 
            </div>
            <div className="champion__repeate-btn mb-3">
            <Button label={'Попробовать еще раз'} disabled={true} onClick={()=>{onClick()}} />
            </div>
          </div>
        </div>
    )
  }
}