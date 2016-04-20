import React from "react";
import styles from "./style.css";
import Temperature from '../../common/components/Temperature';
import Tasting from '../../common/components/Tasting';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Tasting Name = {"Johan"} Notes = {[10, 5, 3, 6, 8, 9, 4, 4, 7, 1, 8, 3, 2, 4, 8]}/>
      </div>
    );
  }
}
