import React, { Component } from "react";

import "./App.css";
import Header from "./organisms/header/header";
import AudioSection from "./organisms/audioSection/audioSection";
import RowContent from "./organisms/rowContent/rowContent";
import Button from "./atoms/button/button";
import birdsData from "./serviceAndData/birdsData";

class App extends Component {
  state = {
    birdsGroupId: 0,
  };

  render() {
    const { birdsGroupId } = this.state;
    const listItems = birdsData[birdsGroupId].sort(() => Math.random() - 0.5);

    return (
      <div className="app-song-bird">
        <div className="container">
          <Header />
          <AudioSection />
          <RowContent dataItemList={listItems} />
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
