import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';

// creating a store from redux library
const store = createStore(reducer);

ReactDOM.render(
  // We need to initialize the actual store of the redux application.
  // State for global application
  // Provider component for react-redux that will pass down its store to the entire application
  // The prop 'store' is marked as reauired in Provider
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
)
