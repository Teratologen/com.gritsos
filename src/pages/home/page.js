import React from "react";
import styles from "./style.css";

import Beertap from "../../common/components/Beertap/index.jsx";


export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Beertap></Beertap>

      </div>
    );
  }
}
