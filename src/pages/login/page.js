import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';
import Article from '../../common/components/Article';

export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }

  render() {
    return (
      <div className={styles.content}>
        <Article></Article>
      </div>
    );
  }
}
