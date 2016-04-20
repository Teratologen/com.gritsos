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
        {children}
      </aside>
    );
  }
}
