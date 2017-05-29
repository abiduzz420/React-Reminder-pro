import { ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDERS } from '../constants';

// Action creator : It is a function which return a javascript object called Actions. This action creator
// becomes a props in the App Component where the action creator is binded with the help of connect function
// Action creators return Actions. These actions contain a type which is a Redux constant and a payload
export const addReminder = (text,dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text, //short hand syntax in ES6 to store key-value pairs having same names
    dueDate
  }
  console.log('action in addReminder',action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('delete reminder in actions',action);
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}
