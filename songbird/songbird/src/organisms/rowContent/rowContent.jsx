import React,{ Component } from 'react';

import './rowContent.css';
import ItemList from '../../molecules/itemList/itemList';
import ItemDetails from '../../molecules/itemDetails/itemDetails';


export default class RowContent extends Component{
  state ={
    selectItemId : null
  }

  onBirdSelected = (selectItemId)=>{
    this.setState({selectItemId})
  }




  render(){
    const {dataItemList} = this.props;
    const {selectItemId} = this.state;
    const detailItem = dataItemList[selectItemId];
    return(
      <div className="row-content d-flex">
        <ItemList 
          onItemSelected={this.onBirdSelected} 
          dataItmeList={dataItemList}/>
          {selectItemId != null? <ItemDetails detailItem={detailItem} />: null}
      </div>

    )
  }
}