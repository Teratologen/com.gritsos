import React from 'react';
import Sidebar from './Sidebar';
import Menu, { MenuItem } from './Menu';
import Beertap from "./Beertap/index.jsx";


import style from '../base.css';


export default ({children}) => {
  return (
    <div className={style.container}>
      <Sidebar className={style.sidebar}>
        <div className={style.menuOuter}>
          <Menu className={style.menu}>
            <MenuItem>Current brew</MenuItem>
            <MenuItem>April 21</MenuItem>
            <MenuItem>March 9</MenuItem>
            <MenuItem>January 2</MenuItem>
          </Menu>
        </div>
        <Beertap className={style.beertap}></Beertap>
      </Sidebar>
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
}
