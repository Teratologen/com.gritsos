import React from "react";
import classNames from 'classnames';

// css
import style from "./article.css";
import Ingredients from '../Ingredients';

/* Usage:
 *  <Sidebar>
 *
 *  </Sidebar>
 */

export default class Article extends React.Component {
  render() {
    return (
      <div>
        <h1>Lorem Ipsum</h1>
        <p className={style.paragraph}> <span className={style.firstcharacter}>A</span>t lorem facilisis lorem a enim, nulla lectus, libero donec integer. At massa primis libero, cum amet nulla amet et consectetuer, nam senectus nunc fusce eu eu arcu, feugiat ante ante pulvinar, nec orci id aptent proin blandit dui. Molestie scelerisque tellus sem blandit, magna sed in. Luctus felis fermentum lobortis aliquip vitae, sit proin corrupti vivamus, dictumst gravida sagittis ut pellentesque suspendisse cras, sodales ac aliquam, quis conubia aenean quisque eu quis malesuada. Maecenas vestibulum, morbi dolor magna proin dui, suspendisse sed, wisi viverra adipiscing faucibus diam sagittis. Vulputate elit bibendum erat non posuere. Varius vel in amet ligula non iaculis. Elit nec, arcu proin eu posuere, ac conubia nam, arcu lorem leo, mauris nunc odio nulla.</p>
        <Ingredients></Ingredients>
      </div>
    );
  }
}
