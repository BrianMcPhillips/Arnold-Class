import React, { Component } from 'react';
import request from 'superagent';

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
    return (
      <div>
        Hello World
      </div>
    )
  }
}
