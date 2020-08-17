import React, { Component } from "react";

import "./App.css";
import Header from "./organisms/header/header";
import AudioSection from "./organisms/audioSection/audioSection";
import RowContent from "./organisms/rowContent/rowContent";
import Button from "./atoms/button/button";
import birdsData from "./serviceAndData/birdsData";
import ItemList from "./molecules/itemList/itemList";

class App extends Component {
  state = {
    birdsGroupId: 0,
    rightAnswer: null,
    selectItemId: null,
    listItems: null,
    randomBirdId: 5,
  };

  componentDidMount() {
    this.createListItems();
  }

  changeLevel = () => {
    this.setState({
      birdsGroupId: (this.state.birdsGroupId += 1),
    });
    this.createListItems();
    this.setState({});
  };

  createListItems = () => {
    const { birdsGroupId } = this.state;
    this.setState({
      listItems: birdsData[birdsGroupId].sort(() => Math.random() - 0.5),
      randomBirdId: Math.floor(Math.random() * 5),
      rightAnswer: false,
      selectItemId: null,
    });
  };

  onBirdSelected = (selectItemId) => {
    const { randomBirdId } = this.state;
    console.log(selectItemId, randomBirdId);
    if (selectItemId === randomBirdId) {
      this.setState({ rightAnswer: true });
    }
    this.setState({ selectItemId });
  };

  render() {
    const {
      birdsGroupId,
      rightAnswer,
      selectItemId,
      randomBirdId,
      listItems,
    } = this.state;

    if (!listItems) return null;

    return (
      <div className="app-song-bird">
        <div className="container">
          <Header />
          <AudioSection
            dataAudio={listItems[randomBirdId]}
            showInfoBird={rightAnswer}
          />
          <RowContent
            dataItemList={listItems}
            onBirdSelected={this.onBirdSelected}
            selectItemId={selectItemId}
            randomBirdId={randomBirdId}
          />
          <Button onClick={this.changeLevel} disabled={rightAnswer} />
        </div>
      </div>
    );
  }
}

export default App;
