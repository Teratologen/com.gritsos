import React from "react";
//import styles from "purecss";

// css
import "../Menu.css";

/*
<Menu name="name">
  <MenuItem>Item 1</MenuItem>
  <MenuItem>Item 2</MenuItem>
</Menu>
*/

export default class Menu extends React.Component {
  render() {
    return (
      <div className="pure-menu pure-menu-horizontal">
        <a href="#" className="pure-menu-heading">GRITSOS</a>
        <ul className="pure-menu-list">
          {this.props.children}
        </ul>
      </div>
    );
  }
}
