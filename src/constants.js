// constants.js file host the types for the Actions

export const ADD_REMINDER = 'ADD_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';
export const CLEAR_REMINDERS = 'CLEAR_REMINDERS';

/*

my secret formula for understanding redux!

1)Add a constant to the constants file. Something like `const GREAT_COURSE = ‘GREAT_COURSE`

2)Add an action creator to the actions folder. Return an action JavaScript object with a type of the constant you created.

3)Add a reducer to the reducers folder that handles this action creator.

*/
