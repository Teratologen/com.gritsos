import React from "react";
//import styles from "purecss";
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
      <div className={classNames(style["pure-menu"], "pure-menu-horizontal")}>
        <a href="#" className={classNames(style.logo, "pure-menu-heading")}>GRITS</a>

        <ul className="pure-menu-list">
          {this.props.children}
        </ul>
      </div>
    );
  }
}
