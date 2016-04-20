import React from 'react';
import style from './beertap.css';

export default class Beertap extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div className={style.container}>
        <div className={style.tap}>
        </div>
        <div className={style.stream}>
        </div>
        <div className={style.glass}>
        </div>
      </div>
    );
  }
}
