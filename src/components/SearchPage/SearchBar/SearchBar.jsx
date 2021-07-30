import React, { Component } from 'react';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  render() {
    const { 
      hanTerm, 
      hanOption,
      optionList, 
      optionState 
    } = this.props;
    return (
      <div className={styles.bar}>
        <select onChange={hanOption}>
          {
            optionList.map(opt => <option key={opt} value={opt}>{opt}</option>)
          }
        </select>
        {
          optionState === 'name' && <input onChange={hanTerm} type='text' />
        }
      </div>
    )
  }
}
