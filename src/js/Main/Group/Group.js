'use strict'

import React from 'react'
import Dragula from 'dragula'

import CardForm from './CardForm'
import CardList from './CardList'
import students from './Data'

class Group extends React.Component {
  componentDidMount () {
    let listFirst = document.querySelectorAll('.list')[0]
    let listSecond = document.querySelectorAll('.list')[1]
    let listThird = document.querySelectorAll('.list')[2]
    let listForth = document.querySelectorAll('.list')[3]
    Dragula(
      [listFirst, listSecond, listThird, listForth]
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      data: students
    }
  }
  handleCommentSubmit(comment) {
    this.props.data.push(comment)
    const comments = this.state.data
    const newComments = comments.concat([comment])
    this.setState({data: newComments})
  }
  render () {
    return <div>
      <CardForm
        data={this.props.data}
        onCommentSubmit={this.handleCommentSubmit.bind(this)}
      />
      <div className='groups'>
        <div className='group'>
          <div className="red">
            <CardList data={
                this.props.data.filter(x => x.defaultTeam === 'red')
              } />
          </div>
        </div>
        <div className='group'>
          <div className="blue">
            <CardList data={
                this.props.data.filter(x => x.defaultTeam === 'blue')
              } />
          </div>
        </div>
        <div className='group'>
          <div className="green">
            <CardList data={
                this.props.data.filter(x => x.defaultTeam === 'green')
              } />
          </div>
        </div>
        <div className='group'>
          <div className="yellow">
            <CardList data={
                this.props.data.filter(x => x.defaultTeam === 'yellow')
              } />
          </div>
        </div>
      </div>
    </div>
  }
}

export default Group
