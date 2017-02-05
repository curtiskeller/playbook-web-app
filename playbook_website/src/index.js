import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import bootstrap from 'bootstrap';
import axios from 'axios';

import socket from './channels/socket.js'
import App from './components/layout/App.jsx';
import PlaybookLibrary from './components/home/PlaybookLibrary.jsx';
import PlaybookOverview from './components/playbook_overview/PlaybookOverview.jsx';
import Scratch from './components/scratch/Scratch.jsx';

import * as NavLinkActions from './actions/NavLinkActions.js'

axios.defaults.baseURL = 'http://localhost:4000/api';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PlaybookLibrary} onEnter={()=>NavLinkActions.routeChange('INDEX')}></IndexRoute>
      <Route path="scratch" name="scratch" component={() => (<Scratch socket={socket} />)} onEnter={()=>NavLinkActions.routeChange('SCRATCH')}></Route>
      <Route path="playbookOverview/:playbook" name="playbookOverview" component={PlaybookOverview}></Route>
    </Route>
  </Router>, app);
