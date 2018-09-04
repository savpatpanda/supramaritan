import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './ducks/reducers';
import Main from './components/Main'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  );

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
      );
  }
}


