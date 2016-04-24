'use strict'

import React from 'react'
import Group from './Group'
import students from './Data'

class Classroom extends React.Component {
  render () {
    return <div>
      <h2>Classroom</h2>
      <Group students={students} />
    </div>
  }
}

export default Classroom
