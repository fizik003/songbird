import React from "react";

import "./App.css";
import Header from "./organisms/header/header";
import AudioSection from "./organisms/audioSection/audioSection";
import RowContent from "./organisms/rowContent/rowContent";

function App() {
  return (
    <div className="app-song-bird">
      <div className="container">
        <Header />
        <AudioSection />
        <RowContent />
      </div>
    </div>
  );
}

export default App;
