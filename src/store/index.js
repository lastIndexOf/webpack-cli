import { createStore } from 'redux'

const fn = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      state.count ++
      break
  }
}

export default createStore(fn)
