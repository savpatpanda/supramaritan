import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './ducks/reducers';
import Main from './components/Main'
import Detail from './components/Detail'
import { createStackNavigator } from 'react-navigation';
import NavigationService from './NavigationService';
const TopLevelNavigator = createStackNavigator({ 
  "Main": Main,
  "Detail": Detail
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  );

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TopLevelNavigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}>
        <Main />
        </TopLevelNavigator>
        
      </Provider>
      );
  }
}


