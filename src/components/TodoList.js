import React, { Component } from 'react'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

@observer
class TodoList extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        hello, world
      </div>
    )
  }
}


export default TodoList
