'use strict'

import React from 'react'
import Task from './Task'

class TaskList extends React.Component {
  render () {
    return <div className='comment-list'>
      {this.props.data.map((task) => {
        return <Task
          taskName={task.taskName}
          taskDescription={task.taskDescription}
        />
      })}
    </div>
  }
}

export default TaskList
