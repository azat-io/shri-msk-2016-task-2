'use strict';

import React from 'react'

import Introduction from './Intro/Introduction'
import Exam from './Task/Exam'
import Classroom from './Group/Classroom'

class Main extends React.Component {
  render() {
    return <main>
      <h1>Welcome back to School!</h1>
      <Introduction />
      <Classroom />
      <Exam />
    </main>
  }
}

export default Main
