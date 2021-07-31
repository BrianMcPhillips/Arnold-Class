import React, { Component } from 'react';
import request from 'superagent';

export default class DetailPage extends Component {
  state = {
    character: {}
  }
  componentDidMount = async() => {
    const id = this.props.match.params.characterId;
    const data = await request
      .get(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
      .accept('application/json');
    this.setState({ character: data.body });
  }
  render() {
    const {
      character: {
        name,
        image
      }
    } = this.state;
    return (
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    )
  }
}
