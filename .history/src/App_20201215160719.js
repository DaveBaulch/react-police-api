import './App.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import IndexPage from './pages/IndexPage';
import LocationPage from './pages/LocationPage';
import OfficersPage from './pages/OfficersPage';
import createBrowserHistory from './history';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory}>
          <Header />
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/location" exact component={LocationPage} />
            <Route path="/officers/:id" exact component={OfficersPage} />
            <Route path="/searches/:id" exact component={OfficersPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
