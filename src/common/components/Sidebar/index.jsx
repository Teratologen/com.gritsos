import React from "react";
import classNames from 'classnames';

// css
import style from "./sidebar.css";

/* Usage:
 *  <Sidebar>
 *
 *  </Sidebar>
 */

export default class Sidebar extends React.Component {
  render() {
    let {className, children, ...props} = this.props;

    className = classNames(className, style.sidebar);

    return (
      <aside className={className} {...props}>
        <header>
          <img src='http://localhost:9090/build/slogan.svg' alt="Gritsos logo" className={style.logo}/>
        </header>
        {children}
      </aside>
    );
  }
}
