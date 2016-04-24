'use strict'

import React from 'react'

class Card extends React.Component {
  render() {
    return <div className='card'>
      <div className='card-photo'>
        <img src={this.props.photo} />
      </div>
      <div className='card-info'>
        <button onClick={this.props.onClick}>×</button>
        <div className='card-header'>
          <p className='firstname'>{this.props.firstName}</p>
          <p className='lastname'>{this.props.lastName}</p>
        </div>
        <hr />
        <div className='card-body'>
          <p>{this.props.role}</p>
        </div>
      </div>
    </div>
  }
}

export default Card
