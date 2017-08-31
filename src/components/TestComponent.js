import React, { PureComponent, Component } from 'react'

export default class TestComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'one'
    }

    this.onChange = this.onChange.bind(this)
  }

  componentWillUpdate() {
    console.log('re-render')
    console.log(this.state)
  }

  componentDidUpdate() {
    console.log('did update')
    console.log(this.state)
  }

  shouldComponentUpdate(nP, nS) {
    // console.log(this.state.count)
    // console.log(nS.count)
    console.log('should update?')
    return true
  }

  onChange(e) {
    this.setState({
      message: e.target.value
    }, () => {
      console.log('setState callback')
      console.log(this.state)
    })
  }

  render() {
    const { message } = this.state

    return (
      <div className="test-component">
        <select onChange={this.onChange} value={message}>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
        <p className="selected">
          选中的是{message}
        </p>
      </div>
    )
  }
}
