'use strict'

import React from 'react'
import Card from './Card'

class CardList extends React.Component {
  static propTypes = {
    students: React.PropTypes.array.isRequired
  };
  render() {
    return <div className='list'>
      {this.props.students.map((person) => {
        return <Card
          firstName={person.firstName}
          lastName={person.lastName}
          role={person.role}
          photo={person.photo}>
        </Card>
      })}
    </div>
  }
}
export default CardList
