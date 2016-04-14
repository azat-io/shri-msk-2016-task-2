'use strict';

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Main />
      <Footer />
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('.app'))
