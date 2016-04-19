import React from 'react';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem.js';

export default ({children}) => {
  return (
    <div id="container">
      <Menu name="name">
        <MenuItem>Beer</MenuItem>
        <MenuItem>Lifestyle</MenuItem>
        <MenuItem>About us</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      {children}
    </div>
  );
}
