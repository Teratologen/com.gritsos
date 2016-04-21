import React from 'react';
import Sidebar from './Sidebar';
import Menu from './Menu';
import Beertap from "./Beertap/index.jsx";


import style from '../base.css';


export default ({children}) => {
  return (
    <div className={style.container}>
      <Sidebar className={style.sidebar}>
        <h2>Gritsos</h2>
        <Menu>
          hello
        </Menu>
        <Beertap className={style.beertap}></Beertap>
      </Sidebar>
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
}
