import React,{ Component } from 'react';

import './rowContent.css';
import ItemList from '../../molecules/itemList/itemList';
import ItemDetails from '../../molecules/itemDetails/itemDetails';


export default class RowContent extends Component{
  state ={
    selectItemId : null
  }

  render(){
    const {dataItemList, onBirdSelected, selectItemId, randomBirdId} = this.props;
    const detailItem = dataItemList[selectItemId];
    const plugItem = (
      <div className='jumbotron rounded col-6 row-content-details' >
        <p>
          Послушайте плеер.
          Выберите птицу из списка
        </p>
      </div>
    )
    return(
      <div className="row-content d-flex">
        <ItemList 
          onItemSelected={onBirdSelected} 
          dataItmeList={dataItemList}
          randomBirdId={randomBirdId}/>
          {selectItemId != null? <ItemDetails detailItem={detailItem} />: plugItem}
      </div>

    )
  }
}