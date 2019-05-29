import React from 'react';

import './App.css';

const Header = ({header, feedback, onClick}) => (
  <header className = {`Header ${feedback}`} onClick = {() => onClick(header)}>
    <h1>Maison Garçon</h1>
  </header>
)

export default Header;