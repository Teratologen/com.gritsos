import React from "react";
import classNames from 'classnames';

// css
import style from "./Menu.css";
/*
<Menu name="name">
  <MenuItem>Item 1</MenuItem>
  <MenuItem>Item 2</MenuItem>
</Menu>
*/

export default class Menu extends React.Component {
  render() {
    return (
      <menu className={style.menu}>
        <ul className="">
          {this.props.children}
        </ul>
      </menu>
    );
  }
}
