import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import NewVideo from './pages/new/Video'
import NewCategory from './pages/new/Category'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/new/video" component={NewVideo} exact />
      <Route path="/new/category" component={NewCategory} exact />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
