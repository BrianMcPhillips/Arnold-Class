import React, { Component } from 'react';

export default class Character extends Component {
  render() {
    const { 
      person: {
        image,
        name
      }
    } = this.props;
    return (
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    )
  }
}
