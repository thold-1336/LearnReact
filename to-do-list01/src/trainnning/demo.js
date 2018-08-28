import { createStore } from 'redux';

let initialState = {
  status: false,
  sort : {
    by : 'name',
    value: 1
  }
}

let myReducer = (state = initialState, action) => {
  if (action.type === 'TOGGLE_STATUS') {
    state.status = !state.status;
    return state;
  }
  return state;
}

const store = createStore(myReducer);
console.log('Default ', store.getState());
//- Toggle status
let action = {
  type: 'TOGGLE_STATUS'
}

store.dispatch(action);

console.log('TOGGLE STATUS', store.getState());
