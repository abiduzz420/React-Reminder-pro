import React, { Component } from 'react';
import { connect } from 'react-redux';
// importing action creators which return action js objects
import { addReminder,deleteReminder,clearReminders } from '../actions';
import moment from 'moment';
// import { bindActionCreators } from 'redux';

/*
Connect function is used to hook up `addReminder` action creator to our react application
connect function of react-redux helps Component connect to the store and the action creator will be created
The connect function works by hooking up two functions to the React Component : mapStateToProps() and mapDispatchToProps
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate:''
    }
  }

  //helper functions
  // addReminder(){
  //   this.props.addReminder(this.state.text,this.state.dueDate);
  //   // console.log('this.state',this.state);
  // }
  //
  // deleteReminder(id){
  //   // console.log('this.props in deleteReminder',this.props);
  //   this.props.deleteReminder(id);
  // }

  renderReminder(){
    const { reminders } = this.props;
    return(
      <div>
        <ul className="list-group cols-sm-4">
          {
            reminders.map((reminder) => {
              return(
                <li key={reminder.id} className="list-group-item">
                  <div className="list-item">
                    {reminder.text}&nbsp;
                    <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                  </div>
                  <div
                    onClick={() => this.props.deleteReminder(reminder.id)}
                    className="list-item delete-button">&#x2715;</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              placeholder="I wish to..."
              type="text"
              className="form-control"
              onChange={(event) => this.setState({text:event.target.value})}
            ></input>
            <input
              className="form-control"
              type="datetime-local"
              onChange={(event) => this.setState({dueDate:event.target.value})}></input>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.props.addReminder(this.state.text,this.state.dueDate)}
            >Add Reminder</button>
          </div>
          {this.renderReminder()}
        </div>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => this.props.clearReminders()}
        >Clear All</button>
      </div>
    );
  }

}

/*
mapStateToProps is defined so as to recognize the Redux state within this component.
states are being converted to props so that it can be accessed globally by any other Component
present within the application
This part of the global state can be accessed by any feature Component we create. We simply need to connect our
Component to the global state as we did with the App Component with the help of connect function
*/

function mapStateToProps(state){
  // console.log('state',state);
  // sets the reminders with state values and returns that object
  return{
    reminders:state
  }
}


/*
mapDispatchToProps binds the action creators we create to overall dispatch functions
and makes it accessible as props within this Component when we call the connect feature
bindActionCreators helps in binding the action creator to our application
*/


/*
Since mapDispatchToProps function is returning only one action creator we can ommit the mapDispatchToProps function
and simply write:
export default connect(null,{addReminder})(App);
We need not import bindActionCreators also
*/

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({addReminder},dispatch);
// }

// connect function takes two arguments : mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps,{addReminder,deleteReminder,clearReminders})(App);
