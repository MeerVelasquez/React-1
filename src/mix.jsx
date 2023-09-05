import React from 'react';
import Banner from './Banner';
import './Banner.css';
import './titulo.css';

function Home({ userData }) {
  if (!userData) {
    return <div>Cargando</div>; 
  }

  return (
    <div>
      <Banner imageUrl={userData.profilePicture} /> 
      <div className="title">
        {userData && (
          <>
            <h2>{userData.text}</h2>
            <h1>{userData.h1Content}</h1> 
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
