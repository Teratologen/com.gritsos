import React from 'react';
import Menu from './Menu.js';
import MenuItem from './MenuItem.js';

export default ({children}) => {
  return (
    <div id="container">
      <Menu name="name">
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </Menu>
      {children}
    </div>
  );
}
