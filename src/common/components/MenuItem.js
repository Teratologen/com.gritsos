import React from "react";
//import styles from "purecss";

// css
import "../MenuItem.css";

export default class MenuItem extends React.Component {
  render() {
    return (
      <li className="pure-menu-item"><a href="#" className="pure-menu-link">{this.props.children}</a></li>
    );
  }
}
