import React, { Component } from 'react';
import Character from './Character/Character';

export default class CharacterList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data.map(char => <Character key={char._id} person={char}/>)
        }
      </div>
    )
  }
}
