import React, { Component } from 'react';
import request from 'superagent';
import styles from './SearchPage.module.css';
import CharacterList from './CharacterList/CharacterList';
import SearchBar from './SearchBar/SearchBar';
import { options } from '../../assets/data';

export default class SearchPage extends Component {
  state = {
    characterState: [],
    term: '',
    option: 'all'
  }
  componentDidMount = async() => {
    const data = await request
    .get(`https://hey-arnold-api.herokuapp.com/api/v1/characters`)
    .accept('application/json');
    
    this.setState({ characterState: data.body});
  }
  handleTerm = (e) => {
    this.setState({ term: e.target.value })
  }
  handleOption = (e) => {
    this.setState({ option: e.target.value })
  }

  render() {
    const { characterState, option } = this.state;
    return (
      <div className={styles.search}>
        <SearchBar 
          optionList={options}
          optionState={option}
          hanOption={this.handleOption}
          hanTerm={this.handleTerm}/>
        <CharacterList 
          data={characterState}/>
      </div>
    )
  }
}
