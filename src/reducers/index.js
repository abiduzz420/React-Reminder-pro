// Reducers take a state in action and returns a new state. They modify action in a pure way
// You must never mutate the state directly. So reducers help in mutating state by creating an
// entire new instance of the state which is in action

import { ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

/*
We always deal with changing of reminders in state within our reducers. So it makes sense to
bake cookies or delete cookies in reducers file whenever we add/delete a reminder.
*/
const reminder = (action) => {
  let {text,dueDate} = action
  // returns a js object
  return {
    text,
    dueDate,
    id: Math.random()
  }
}

const deleteById = (state = [], id) => {
  const reminders = state.filter((reminder) => reminder.id !== id);
  console.log('new reduced reminders',reminders);
  return reminders;
}

// one reducer as a constant as reminders
const reminders = (state = [], action) => {
  let reminders = null;
  // state is not empty when the browser is refreshed
  state = read_cookie('reminders');
  // Action returns a type. With the help of type, we exactly know how to modify reminders or a state.
  switch(action.type){
    case ADD_REMINDER:
      // ES trick called spread operator with spread on state i.e ``[...state]``
      // Spread operator allows us to copy the content of an array/object into an another array/object
      reminders = [...state,reminder(action)];
      console.log('reminders as state',reminders);
      bake_cookie('reminders',reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = deleteById(state,action.id);
      bake_cookie('reminders',reminders)
      return reminders;
    case CLEAR_REMINDERS:
      reminders = []
      bake_cookie('reminders',reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
