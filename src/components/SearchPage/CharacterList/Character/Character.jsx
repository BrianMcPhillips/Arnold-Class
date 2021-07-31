import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Character extends Component {
  render() {
    const { 
      person: {
        image,
        name,
        _id
      }
    } = this.props;
    return (
      <div>
        <img src={image} alt={name} />
        <Link to={`/detail/${_id}`}>
          <h3>{name}</h3>
        </Link>
      </div>
    )
  }
}
