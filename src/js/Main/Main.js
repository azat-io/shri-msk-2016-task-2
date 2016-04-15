'use strict';

import React from 'react'

import Group from './Group/Group'
import Exam from './Task/Exam'

import students from './Group/Data'

class Main extends React.Component {
  render() {
    return <main>
      <Group students={students} />
      <Exam />
    </main>
  }
}

export default Main
