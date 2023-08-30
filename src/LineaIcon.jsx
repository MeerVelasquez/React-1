import React from 'react';
import './IconGrid.css';
import Icon from './IconFila'; 

function LineaIcon({ onIconClick }) {
  const iconData = [
    { name: "perfil.png", text: "Hi, My name is", info: "Jenny Jenkins" },
    { name: "sobre.png", text: "My email is", info: "jenny.jenkins@example.com" },
    { name: "calendario.png", text: "My birthday is", info: "January 1, 1990" },
    { name: "mapa.png", text: "My address is", info: "123 Main St, City" },
    { name: "telefono.png", text: "My phone number is", info: "(664)-349-1444" },
    { name: "candado.png", text: "My password is", info: "********" },
  ];

  return (
    <div className="icon-grid">
      {iconData.map((icon, index) => (
        <Icon
          key={index}
          imageUrl={require(`./icons/${icon.name}`)} 
          onClick={() => onIconClick(icon.text, icon.info)}
        />
      ))}
    </div>
  );
}

export default LineaIcon;