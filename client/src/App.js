import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import AdsContainer from './components/AdsContainer'
// import EventDetailsContainer from './components/AdsDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdsContainer} />
          {/* <Route path="/events/:id" component={AdsDetailsContainer} /> */}
        </div>
      </Provider>
    );
  }
}

export default App;