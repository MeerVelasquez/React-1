import React from 'react';
import './Banner.css';

function Banner(props) {
  return (
    <div className="line-banner">
      <img src={props.imageUrl} alt="Foto circular" className="circle-image" />
    </div>
  );
}

export default Banner;
