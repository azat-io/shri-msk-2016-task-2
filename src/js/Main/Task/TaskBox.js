'use strict'

import React from 'react'

import TaskForm from './TaskForm'
import TaskList from './TaskList'
import taskData from './Data'

class TaskBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: taskData
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
      <TaskForm
        data={this.props.data}
        onCommentSubmit={this.handleCommentSubmit.bind(this)}
      />
      <TaskList
        data={this.props.data}
      />
    </div>
  }
}

export default TaskBox
