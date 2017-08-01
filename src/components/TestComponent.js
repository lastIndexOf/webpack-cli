import React, { Component } from 'react'

export default class TestComponent extends Component {
  constructor() {
    super()

    this.state = {
      message: 'hello, world'
    }
  }

  onClick(...args) {
    this.setState((pre, net) => ({
      message: pre.message + ' +1'
    }))
    console.log(1)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.message.length > 15)
      return false

    return true
  }

  render() {
    let i = 1

    return (
      <div id="test-component">
        {this.state.message}
        <button className="btn" onClick={ (p, e) => this.onClick(e, i)}>click me</button>
      </div>
    )
  }
}
