import React, { Component } from 'react'
import TestComponent from './components/TestComponent'

export default class App extends Component {
  render() {
    return (
      <TestComponent prop={'hello, world'}></TestComponent>
    )
  }
}
