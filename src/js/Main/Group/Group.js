'use strict';

import React from 'react'
import Dragula from 'dragula'

import CardList from './CardList'

class Group extends React.Component {

  componentDidMount () {
    let raccoon = document.querySelector('.raccoon')
    let villians = document.querySelector('.villians')
    let third = document.querySelector('.third')
    let forth = document.querySelector('.forth')
    let listFirst = document.querySelectorAll('.list')[0]
    let listSecond = document.querySelectorAll('.list')[1]
    let listThird = document.querySelectorAll('.list')[2]
    let listForth = document.querySelectorAll('.list')[3]
    Dragula(
      [raccoon, villians, third, forth, listFirst, listSecond, listThird, listForth]
    )
  }

  static propTypes = {
    students: React.PropTypes.array.isRequired
  }
  render () {
    return <div className='groups'>
      <div className='group'>
        <div className="red">
          <CardList students={
              this.props.students.filter(x => x.defaultTeam === 'red')
            } />
        </div>
      </div>
      <div className='group'>
        <div className="blue">
          <CardList students={
              this.props.students.filter(x => x.defaultTeam === 'blue')
            } />
        </div>
      </div>
      <div className='group'>
        <div className="green">
          <CardList students={
              this.props.students.filter(x => x.defaultTeam === 'green')
            } />
        </div>
      </div>
      <div className='group'>
        <div className="yellow">
          <CardList students={
              this.props.students.filter(x => x.defaultTeam === 'yellow')
            } />
        </div>
      </div>
      </div>
  }
}

export default Group
