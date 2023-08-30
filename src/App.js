import React, { useState } from "react";
import Home from "./mix";
import LineaIcon from "./LineaIcon";

function App() {
  const [headerText, setHeaderText] = useState("Welcome to my portfolio!");
  const [infoText, setInfoText] = useState("Click on the icons to find out more about me and my projects");

  const handleIconClick = (newHeaderText, newInfoText) => {
    setHeaderText(newHeaderText);
    setInfoText(newInfoText);
  };

  return (
    <div className="app">
      <Home headerText={headerText} infoText={infoText} />
      <LineaIcon onIconClick={handleIconClick} />
    </div>
  );
}

export default App;


