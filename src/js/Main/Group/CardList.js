'use strict'

import React from 'react'
import Lodash from 'lodash'
import Card from './Card'

class CardList extends React.Component {
  constructor(props) {
    super(props)
    const { students } = this.props
    this.state = {
      students
    }
  }
  deletePerson(person) {
    const students = _.clone(this.state.students)
    const clickedPersonIndex = _.findIndex(students, s => _.isEqual(s, person))
    if (~clickedPersonIndex) {
      students.splice(clickedPersonIndex, 1)
      this.setState({
        students
      })
    }
  }
  render () {
    return <div className='list'>
      {this.state.students.map((person) => {
        return <Card
          onClick={this.deletePerson.bind(this, person)}
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
