import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/greeting";
import ImageAlbum from "./components/ImageAlbum";
import witcherLogo from "./components/assets/logos/cleanMedallion.png";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Baim" /> {/*ini adalah komponent */}
        <ImageAlbum imageSrc={witcherLogo} />
        <p>
          This Wolf Need's Power!
          <br /> Click this button below to help him!
        </p>
        <Counter />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
