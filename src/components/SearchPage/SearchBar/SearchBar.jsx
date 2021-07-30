import React, { Component } from 'react';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  render() {
    const { 
      select,
      optionChar,
      optionGif,
      hanSelect,
      hanCount,
      hanTerm, 
      hanClick,
      hanOptionChar,
      hanOptionGif
    } = this.props;
    return (
      <div className={styles.bar}>
        <select onChange={hanSelect}>
          <option value='characters'>Character</option>
          <option value='gif'>Gif</option>
        </select>
        {
          select === 'characters' &&
            <div>
              <select onChange={hanOptionChar}>
                <option value=''>All</option>
                <option value='?name'>Name</option>
                <option value='/random?'>Random</option>
              </select>
              {
                optionChar === '?name' && <input onChange={hanTerm} type='text' />
              }
              {
                optionChar === '/random?' && <input onChange={hanCount} type='number' />
              }
              <button onClick={hanClick}>Get Character</button>
            </div>
        }
        {
          select === 'gif' &&
            <div>
              <select onChange={hanOptionGif}>
                <option value=''>All</option>
                <option value='/random?'>Random</option>
              </select>
              {
                optionGif === '/random?' && 
                  <input onChange={hanCount} type='number' />
              }
              <button onClick={hanClick}>Get Gif</button>
            </div>
        }

      </div>
    )
  }
}
