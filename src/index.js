import React, { Component} from 'react'
import {render} from 'react-dom'
import CalculatorPanel from './components/CalculatorPanel'

class App extends Component {
  render() {
    return (
      <main>
      <CalculatorPanel />
      </main>
    )
  }
}

render(
  <App />,
  document.querySelector('#root')
)
