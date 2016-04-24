'use strict'

import React from 'react'
import Waypoint from 'react-waypoint'

class Introduction extends React.Component {
  render () {
    return <div className='intro'>
      <img src='./images/garrison.png' />
      <div>
        <p>Hi there! I'm Mr. Garrison.</p>
        <p>And I would like to introduce you our project. So, as you know, in our progressive school we start to teach our pupils a <b>Computer science</b>.</p>
        <p>We create this the application which we are using to control the learning process.</p>
        <p>At the bottom of this message you can find our classroom. Before we start to work with our groups you can add new pupils. Click at the button <b>"Add a new student"</b>. Fill the form of pop-up window. You should write here some information about our new pupil: first name, last name, the student's role in group, link to student's photo and choose the student's future team.</p>
        <p>Awesome! Also if you need you can <b>remove some pupils</b>. Hover on top right corner of student card and click <b>×</b> button to remove it!</p>
        <p>At the same time you can change groups. <b>Drag and drop</b> pupil's cards to move some pupils to other groups.</p>
      </div>
    </div>
  }
}

export default Introduction
