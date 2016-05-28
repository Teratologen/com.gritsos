import React from 'react';
import classNames from 'classnames';

import MenuItem from './MenuItem';
export { MenuItem };

import style from "./Menu.css";

/*
 * <Menu name="name">
 *   <MenuItem>Item 1</MenuItem>
 *   <MenuItem>Item 2</MenuItem>
 * </Menu>
 */

export default class Menu extends React.Component {
  render() {
    return (
      <menu className={style.menu}>
        <ul className="pure-menu-list">
          {this.props.children}
        </ul>
      </menu>
    );
  }
}
