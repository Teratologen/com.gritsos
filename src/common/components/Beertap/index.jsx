import React from 'react';
import style from './beertap.css';
import classNames from 'classnames';

export default class Beertap extends React.Component {
  render() {
    const {children, className, ...props} = this.props;
    const containerClass = classNames(style.container, className);
    const streamClass = classNames(style.stream, 'beerEBC-50');
    
    return (
      <div className={containerClass} {...props}>
        <div className={style.tap}></div>
        <div className={streamClass}></div>
        <div className={style.glass}></div>
      </div>
    );
  }
}
