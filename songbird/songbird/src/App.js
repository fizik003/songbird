import React, { Component } from "react";

import "./App.css";
import Header from "./organisms/header/header";
import AudioSection from "./organisms/audioSection/audioSection";
import RowContent from "./organisms/rowContent/rowContent";
import Button from "./atoms/button/button";
import { birdsData, birdsCategity } from "./serviceAndData/birdsData";
import { myBirdsData, myCategory } from "./serviceAndData/myBirdsData";
import WinComponent from "./organisms/winComponent/winComponent";

class App extends Component {
  state = {
    birdsGroupId: 0,
    rightAnswer: null,
    selectItemId: null,
    listItems: null,
    randomBirdId: 5,
    score: 0,
    amountOfPoints: 5,
    hardMode: true,
  };
  listMenu = myCategory;

  componentDidMount() {
    this.createListItems();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.birdsGroupId == 6 && this.state.birdsGroupId === 0) {
      this.createListItems();
    }
  }

  changeDificul = (value) => {
    this.setState({ hardMode: value });
    console.log(value);
    console.log(this.state.hardMode);
  };

  changeLevel = () => {
    if (this.state.birdsGroupId != this.listMenu.length - 1) {
      this.setState({
        birdsGroupId: (this.state.birdsGroupId += 1),
        amountOfPoints: 5,
      });
      this.createListItems();
    } else {
      this.setState({ birdsGroupId: (this.state.birdsGroupId += 1) });
    }
  };

  createListItems = () => {
    const { birdsGroupId } = this.state;
    const listItems = myBirdsData[birdsGroupId].sort(() => Math.random() - 0.5);
    const randomBirdId = Math.floor(Math.random() * 5);
    this.setState({
      listItems,
      randomBirdId,
      rightAnswer: false,
      selectItemId: null,
    });

    console.log(listItems[randomBirdId].name);
  };

  onBirdSelected = (selectItemId, e) => {
    const { randomBirdId, score, amountOfPoints, rightAnswer } = this.state;
    if (!rightAnswer) {
      if (selectItemId === randomBirdId) {
        if (!e.target.classList.contains("right")) {
          e.target.classList.add("right");
          this.setState({
            rightAnswer: true,
            score: score + amountOfPoints,
          });
        }
      } else if (!e.target.classList.contains("wrong")) {
        e.target.classList.add("wrong");
        const audio = new Audio(
          "https://sound-pack.net/download/Sound_11118.wav"
        );

        audio.play();
        this.setState({
          amountOfPoints: amountOfPoints - 1,
        });
      }
    }
    this.setState({ selectItemId });
  };

  restartGame = () => {
    this.setState({
      birdsGroupId: 0,
      score: 0,
      amountOfPoints: 5,
    });
  };

  render() {
    const {
      birdsGroupId,
      rightAnswer,
      selectItemId,
      randomBirdId,
      listItems,
      score,
      amountOfPoints,
    } = this.state;

    if (!listItems) return null;
    const lenMenu = this.listMenu.length;
    // console.log(listItems[randomBirdId].name);

    const mainContent = (
      <div className="mb-3">
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
          onClick={this.changeLevel}
          disabled={rightAnswer}
          label={"Cледующий уровень"}
        />
      </div>
    );

    return (
      <div className="app-song-bird">
        <div className="container">
          <Header
            selectNavItem={birdsGroupId}
            score={score}
            listMenu={this.listMenu}
          />
          {birdsGroupId === lenMenu ? (
            <WinComponent score={score} onClick={this.restartGame} />
          ) : (
            mainContent
          )}
        </div>
      </div>
    );
  }
}

export default App;
