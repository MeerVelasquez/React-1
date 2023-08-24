import React from 'react';
import './App.css';
import Banner from './Banner'; 
import Titulo from './titulo';
import LineaIcon from './LineaIcon';


function App() {
  return (
    <div className="App">
      {/* Other components */}
      <Banner imageUrl= "https://randomuser.me/api/portraits/women/18.jpg" />
       <Titulo/>
         <LineaIcon/>
    </div>
  );
}

export default App;


