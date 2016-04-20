import React from 'react';
import style from './beertap.css';
import classNames from 'classnames';

export default class Beertap extends React.Component {
  render() {
    const {children, className, ...props} = this.props;
    let classname = classNames(style.container, className);
    
    return (
      <div className={classname} {...props}>
        <div className={style.tap}></div>
        <div className={style.stream}></div>
        <div className={style.glass}></div>
      </div>
    );
  }
}
