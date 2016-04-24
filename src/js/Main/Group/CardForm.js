'use strict'

import React from 'react'
import SkyLight from 'react-skylight'

class CardForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const firstNameVal = e.target[0].value.trim();
    const lastNameVal = e.target[1].value.trim();
    const roleVal = e.target[2].value.trim();
    const photoVal = e.target[3].value.trim();
    const defaultTeamVal = e.target[4].value.trim();
    if (!lastNameVal || !firstNameVal || !roleVal || !photoVal || !defaultTeamVal) {
      return;
    }
    this.props.onCommentSubmit({firstName: firstNameVal, lastName: lastNameVal, role: roleVal, photo: photoVal, defaultTeam: defaultTeamVal});
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    e.target[3].value = '';
    e.target[4].value = '';
    return;
  }
  render() {
    let dialogStyleCard = {
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
    let closeCard = {
      display: 'none'
    };
    return <div>
      <button className='card-button'
        onClick={() => this.refs.cardDialog.show()}>
        Add a new student +
      </button>
      <SkyLight
        dialogStyles={dialogStyleCard}
        closeButtonStyle={closeCard}
        hideOnOverlayClicked
        ref="cardDialog">
        <div className='card-form'>
          <ul>
            <li onClick={() => this.refs.cardDialog.hide()}></li>
            <li onClick={() => this.refs.cardDialog.hide()}></li>
            <li onClick={() => this.refs.cardDialog.hide()}></li>
          </ul>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' required placeholder='First name' />
            <input type='text' required placeholder='Last name' />
            <input type='text' required placeholder='Role in project' />
            <input type='text' required placeholder='Photo' />
            <select>
              <option value='red'>Red</option>
              <option value='blue'>Blue</option>
              <option value='green'>Green</option>
              <option value='yellow'>Yellow</option>
            </select>
            <button onClick={() => this.refs.cardDialog.hide()} type='submit'>Create</button>
          </form>
        </div>
      </SkyLight>
    </div>
  }
}

export default CardForm
