import React,{ Component } from 'react';

import './rowContent.css';
import ItemList from '../../molecules/itemList/itemList';
import ItemDetails from '../../molecules/itemDetails/itemDetails';


export default class RowContent extends Component{
  state ={
    selectItemId : null
  }
  

  // onBirdSelected = (selectItemId)=>{
  //   console.log()
  //   this.setState({selectItemId})
    
  // }




  render(){
    const {dataItemList, onBirdSelected, selectItemId} = this.props;
    // const {selectItemId} = this.state;
    const detailItem = dataItemList[selectItemId];
    return(
      <div className="row-content d-flex">
        <ItemList 
          onItemSelected={onBirdSelected} 
          dataItmeList={dataItemList}/>
          {selectItemId != null? <ItemDetails detailItem={detailItem} />: null}
      </div>

    )
  }
}