import React, { useState } from 'react';
import './IconGrid.css';
import Icon from './IconFila';
import axios from 'axios';

function LineaIcon({ onIconClick }) {
  const iconData = [
    { name: "perfil.png", text: "My name is", userDataKey: "name" },
    { name: "sobre.png", text: "My email is", userDataKey: "email" },
    { name: "calendario.png", text: "My birthday is", userDataKey: "dob.date" },
    { name: "mapa.png", text: "My address is", userDataKey: "location.street" },
    { name: "telefono.png", text: "My phone is", userDataKey: "phone" },
    { name: "candado.png", text: "My password is", userDataKey: "login.password" },
  ];

  const handleIconClick = async (icon) => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const user = response.data.results[0];
      let h1Content = '';

      switch (icon.userDataKey) {
        case 'name':
          h1Content = user.name.first + ' ' + user.name.last;
          break;
        case 'email':
          h1Content = user.email;
          break;
        case 'dob.date':
          h1Content = user.dob.date;
          break;
        case 'location.street':
          h1Content = user.location.street.number + ' ' + user.location.street.name;
          break;
        case 'phone':
          h1Content = user.phone;
          break;
        case 'login.password':
          h1Content = user.login.password;
          break;
        default:
          h1Content = '';
      }

      const userData = {
        text: icon.text,
        h1Content, 
        profilePicture: user.picture.large,
      };

      console.log(userData);
      onIconClick(userData);
      console.log('Icon clicked:', icon);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="icon-grid">
      {iconData.map((icon, index) => (
        <Icon
          key={index}
          imageUrl={require(`./icons/${icon.name}`)}
          onClick={() => handleIconClick(icon)}
        />
      ))}
    </div>
  );
}

export default LineaIcon;
