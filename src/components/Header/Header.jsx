import React, { Component } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Hey Arnold!</h1>
        <Link to={'/'}>Search Page</Link>
      </div>
    )
  }
}
