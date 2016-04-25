'use strict'

import React from 'react'
import Card from './Card'

class CardList extends React.Component {
  deletePerson(person) {
    this.props.data.splice(this.props.data.indexOf(person), 1)
    this.setState()
  }
  render () {
    let that = this
    return <div className='list'>
      {this.props.data.map((person) => {
        return <Card
          onClick={that.deletePerson.bind(this, person)}
          firstName={person.firstName}
          lastName={person.lastName}
          role={person.role}
          photo={person.photo}
          defaultTeam={person.defaultTeam}
        />
      })}
      <span></span>
    </div>
  }
}

export default CardList
