import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import axios from 'axios';

import App from './components/layout/App.jsx';
import PlaybookLibrary from './components/home/PlaybookLibrary.jsx';
import PlaybookOverview from './components/playbook_overview/PlaybookOverview.jsx';

axios.defaults.baseURL = 'http://localhost:4000/api';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PlaybookLibrary}></IndexRoute>
      <Route path="playbookOverview/:playbook" name="playbookOverview" component={PlaybookOverview}></Route>
    </Route>
  </Router>, app);
