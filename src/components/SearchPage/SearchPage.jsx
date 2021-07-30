import React, { Component } from 'react';
import request from 'superagent';
import CharacterList from './CharacterList/CharacterList';

export default class SearchPage extends Component {
  state = {
    characterState: []
  }
  componentDidMount = async() => {
    const data = await request
    .get(`https://hey-arnold-api.herokuapp.com/api/v1/characters`)
    .accept('application/json');
    
    this.setState({ characterState: data.body});
  }
  render() {
    const { characterState } = this.state;
    return (
      <div>
        <CharacterList data={characterState}/>
      </div>
    )
  }
}
