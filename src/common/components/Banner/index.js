import React from 'react';
import style from './banner.css';

export default class Banner extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div className={style.banner}>
          <h1 className={style.bannerHead}>
              {children}
          </h1>
      </div>
    );
  }
}
