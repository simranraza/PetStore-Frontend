import React        from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
  // browserHistory
}                   from 'react-router';
import App          from '../containers/app/App.jsx';
import Home         from '../views/home/Home.jsx';
import About        from '../views/about/About.jsx';
import Pets         from '../views/Pets/Pets.jsx';
import Pet         from '../views/Pets/Pet.jsx'

export const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pets" component={Pets} />
        <Route path="/pet" component={Pet} />
      </Route>
    </Router>
  );
};
