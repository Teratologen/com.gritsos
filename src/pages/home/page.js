import React from "react";
import styles from "./style.css";

import Banner from "../../common/components/Banner/index.js";


export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Banner>Gritsos</Banner>
        <p>Welocome</p>
      </div>
    );
  }
}
