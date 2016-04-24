'use strict'

import React from 'react'
import Rating from './Rating'

const styles = {
  active: {
    display: 'inherit',
    padding: '10px'
  },
  inactive: {
    display: 'none',
    padding: '10px'
  }
}

class Task extends React.Component {
  constructor () {
    super ()
    this.state = {
      active: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle () {
    this.setState({
      active: !this.state.active
    })
  }
  render () {
    const stateStyle = this.state.active ? styles.active : styles.inactive
    return <section>
      <div className='task-name' onClick={this.toggle}>
        {this.props.taskName}
      </div>
      <div style={stateStyle}>
        <div className='task-description'>
          {this.props.taskDescription}
          <h4>Marks:</h4>
          <div className='reds-mark'>Reds: <Rating /></div>
          <div className='blues-mark'>Blues: <Rating /></div>
          <div className='greens-mark'>Greens: <Rating /></div>
          <div className='yellows-mark'>Yellows: <Rating /></div>
        </div>
      </div>
    </section>
  }
}

Task.propTypes = {
  taskName: React.PropTypes.string.isRequred,
  taskDescription: React.PropTypes.string.isRequred
}


export default Task
