import React from 'react';
import './IconGrid.css';
import Icon from './IconFila'; 

function LineaIcon() {
  const handleClick = () => {
    console.log("Icono clickeado");
  };

  const iconNames = [
    "perfil.png", "sobre.png", "calendario.png", "mapa.png", "telefono.png", "candado.png" 
    
  ];

  return (
    <div className="icon-grid">
      {iconNames.map((iconName, index) => (
        <Icon
          key={index}
          imageUrl={require(`./icons/${iconName}`)} 
          onClick={handleClick}
        />
      ))}
    </div>
  );

}

export default LineaIcon;
