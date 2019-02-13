import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import AdsContainer from './components/AdsContainer'
import AdFormContainer from './components/AdFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdsContainer} />
          <Route path="/" exact component={AdFormContainer} />

        </div>
      </Provider>
    );
  }
}

export default App;