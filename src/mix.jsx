import React from "react";
import Banner from "./Banner"; 
import "./Banner.css"; 
import "./titulo.css";

function Home({ headerText, infoText }) {
  return (
    <div>
      
      <Banner imageUrl="https://randomuser.me/api/portraits/women/18.jpg" />
      <div className="title">
        <h2>{headerText}</h2>
        <h1>{infoText}</h1>
      </div>
    </div>
  );
}

export default Home;
