'use strict'

import React from 'react'
import TaskBox from './TaskBox'
import taskData from './Data'

class Exam extends React.Component {
  render () {
    return <div>
      <h2>Tasks</h2>
      <TaskBox data={taskData} />
    </div>
  }
}

export default Exam
