import React, { Component } from 'react'
import TestComponent from './components/TestComponent'

export default class App extends Component {
  onClick(e) {
    console.log(2)
  }

  render() {
    return (
      <div className="wrapper" onClick={e => this.onClick(e)}>
        <TestComponent></TestComponent>
      </div>
    )
  }
}
