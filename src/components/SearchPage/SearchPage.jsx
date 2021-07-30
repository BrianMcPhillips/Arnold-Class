import React, { Component } from 'react';
import request from 'superagent';
import styles from './SearchPage.module.css';
import CharacterList from './CharacterList/CharacterList';
import SearchBar from './SearchBar/SearchBar';


export default class SearchPage extends Component {
  state = {
    characterState: [],
    term: '',
    count: 1,
    select: 'characters',
    optionChar: '',
    optionGif: ''
  }

  makeRequest = async() => {
    const data = await request
      .get(`https://hey-arnold-api.herokuapp.com/api/v1/${this.state.select}`)
      .accept('application/json');
    
    this.setState({ characterState: data.body});
  }
  handleSelect = (e) => {
    this.setState({ select: e.target.value })
  }
  handleOptionChar = (e) => {
    this.setState({ optionChar: e.target.value })
  }
  handleOptionGif = (e) => {
    this.setState({ optionGif: e.target.value })
  }
  handleTerm = (e) => {
    this.setState({ term: e.target.value })
  }
  handleCount = async(e) => {
    await this.setState({ count: e.target.value })
  }
  handleClick = (e) => {
    this.makeRequest();
  }

  render() {
    const { characterState, select, optionChar, optionGif } = this.state;
    return (
      <div className={styles.search}>
        <SearchBar 
          select={select}
          optionChar={optionChar}
          optionGif={optionGif}
          hanSelect={this.handleSelect}
          hanCount={this.handleCount}
          hanClick={this.handleClick}
          hanTerm={this.handleTerm}
          hanOptionChar={this.handleOptionChar}
          hanOptionGif={this.handleOptionGif}/>
        <CharacterList 
          data={characterState}/>
      </div>
    )
  }
}
