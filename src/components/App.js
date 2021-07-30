import React, { Component } from 'react';
import SearchPage from './SearchPage/SearchPage';
import Header from './Header/Header';
import DetailPage from './DetailPage/DetailPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route 
              path='/'
              exact
              render={(routerProps) => <SearchPage {...routerProps}/>}
              />
            <Route
              path='/detail/:characterId'
              exact
              render={(routerProps) => <DetailPage {...routerProps}/>}
              />
          </Switch>
        </Router>
      </div>
    )
  }
}
