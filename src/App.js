import React, { useState } from 'react';
import Home from './mix';
import LineaIcon from './LineaIcon';

function App() {
  const [userData, setUserData] = useState(null);

  const handleIconClick = (icon) => {
    setUserData(icon);
  };

  return (
    <div className="app">
      <Home userData={userData} />
      <LineaIcon onIconClick={handleIconClick} />
    </div>
  );
}

export default App;