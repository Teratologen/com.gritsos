import React from 'react';
import classNames from 'classnames';

import style from "./ingredients.css";

export default class Ingredients extends React.Component {
  render() {
    return (
      <div>
        <ul className={style.container}>
          <li className={style.item}><div style={{backgroundImage: 'url(http://localhost:9090/build/barley.svg)', backgroundRepeat: 'no-repeat', height: '100%'}}>Fermentables</div></li>
          <li className={style.item}><div style={{backgroundImage: 'url(http://localhost:9090/build/hops.svg)', backgroundRepeat: 'no-repeat', height: '100%'}}>Hops</div></li>
          <li className={style.item}>Yeast</li>
        </ul>
      </div>
    );
  }
}
