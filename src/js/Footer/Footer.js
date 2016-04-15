'use strict';

import React from 'react'

class Footer extends React.Component {
  render() {
    return <footer>
      <hr />
      <p className='github-link'>
        <a href='https://github.com/azat-io/shri-msk-2016-task-2' target='_blank'>Look at GitHub</a>
      </p>
      <p className='special'>
        <a href='https://academy.yandex.ru/events/frontend/shri_msk-2016/' target='_blank'>Special 4 <span className='yandex'>Y</span>andex</a>
      </p>
    </footer>
  }
}

export default Footer
