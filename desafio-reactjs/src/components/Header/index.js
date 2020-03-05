import React from 'react';

import facebook from '../../assets/facebook.png';
import avatar from '../../assets/gustavo.jpg';

import './styles.css';

export default function Header() {
  return (
    <header>
      <img src={facebook} alt="Facebook"/>

      <div className="avatar">
        <strong>Gustavo Souza</strong>
        <img src={avatar} alt="Avatar"/>
      </div>
    </header>
  );
}
