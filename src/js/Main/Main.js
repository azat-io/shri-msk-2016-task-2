'use strict';

import React from 'react'

import Introduction from './Intro/Introduction'
import Exam from './Task/Exam'
import Classroom from './Group/Classroom'

class Main extends React.Component {
  render() {
    return <main>
      <Introduction />
      <Classroom />
      <Exam />
    </main>
  }
}

export default Main
