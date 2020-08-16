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
    rightAnswer: false,
    selectItemId: null,
    listItems: null,
    randomBirdId: 5,
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    this.setState({
      ...this.state,
      listItems: birdsData[0].sort(() => Math.random() - 0.5),
      randomBirdId: Math.floor(Math.random() * 5),
    });

    console.log(this.state);
  };

  onBirdSelected = (selectItemId) => {
    const { randomBirdId } = this.state;
    if (selectItemId === randomBirdId) this.setState({ rightAnswer: true });
    this.setState({ selectItemId });
    console.log(this.state);
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
          />
          <Button
            onClick={() => {
              console.log(this.state);
            }}
            disabled={rightAnswer}
          />
        </div>
      </div>
    );
  }
}

export default App;
