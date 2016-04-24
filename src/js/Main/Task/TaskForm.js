'use strict'

import React from 'react'
import SkyLight from 'react-skylight'

class TaskForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const taskNameVal = e.target[0].value.trim();
    const taskDescriptionVal = e.target[1].value.trim();
    if (!taskDescriptionVal || !taskNameVal) {
      return;
    }
    this.props.onCommentSubmit({taskName: taskNameVal, taskDescription: taskDescriptionVal});
    e.target[0].value = '';
    e.target[1].value = '';
    return;
  }
  render() {
    let dialogStyleTask = {
      backgroundColor: '#00897B',
      padding: 0,
      height: 'auto,',
      borderRadius: '5px',
      borderTop: '1px solid #3498db',
      borderLeft: '1px solid #acacac',
      borderRight: '1px solid #acacac',
      borderBottom: '1px solid #acacac',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px #acacac',
      background: '#fff',
      textAlign: 'right',
      position: 'fixed',
      top: '50%',
      left: '50%',
      width: '400px',
      height: 'auto',
      marginLeft: '-200px',
      marginTop: '-235px',
      transform: 'translateY(45px)'
    }
    let closeTask = {
      display: 'none'
    };
    return <div>
      <button className='task-button'
        onClick={() => this.refs.taskDialog.show()}>
        Add a new task +
      </button>
      <SkyLight
        dialogStyles={dialogStyleTask}
        closeButtonStyle={closeTask}
        hideOnOverlayClicked
        ref="taskDialog">
        <div className='task-form'>
          <ul>
            <li onClick={() => this.refs.taskDialog.hide()}></li>
            <li onClick={() => this.refs.taskDialog.hide()}></li>
            <li onClick={() => this.refs.taskDialog.hide()}></li>
          </ul>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' required placeholder='Write your task name' />
            <textarea required placeholder='Task description...'></textarea>
            <button onClick={() => this.refs.taskDialog.hide()} type='submit'>Create</button>
          </form>
        </div>
      </SkyLight>
    </div>
  }
}

export default TaskForm
