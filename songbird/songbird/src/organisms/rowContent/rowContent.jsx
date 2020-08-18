import React,{ Component } from 'react';

import './rowContent.css';
import ItemList from '../../molecules/itemList/itemList';
import ItemDetails from '../../molecules/itemDetails/itemDetails';


export default class RowContent extends Component{

  render(){
    const {dataItemList, onBirdSelected, selectItemId} = this.props;
    const detailItem = dataItemList[selectItemId];
    const plugItem = (
      <div className='jumbotron rounded col-12 row-content-details col-lg-6' >
        <p>
          Послушайте плеер.
          Выберите птицу из списка
        </p>
      </div>
    )
    return(
      <div className="row-content d-flex mb-4 flex-wrap col-12">
        <ItemList 
          onItemSelected={onBirdSelected} 
          dataItmeList={dataItemList}/>
          {selectItemId != null? <ItemDetails detailItem={detailItem} />: plugItem}
      </div>

    )
  }
}