import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import bootstrap from 'bootstrap';
import axios from 'axios';

import socket from './channels/socket.js'
import App from './components/layout/App.jsx';
import PlaybookLibrary from './components/home/PlaybookLibrary.jsx';
import PlaybookOverview from './components/playbook_overview/PlaybookOverview.jsx';
import MapOverview from './components/map_overview/MapOverview.jsx';
import PlayOverview from './components/play_overview/PlayOverview.jsx';
import Scratch from './components/scratch/Scratch.jsx';

axios.defaults.baseURL = 'http://localhost:4000/api';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PlaybookLibrary} ></IndexRoute>
      <Route path="scratch/:scratchId" name="scratch" component={Scratch} ></Route>
      <Route path="playbookOverview/:playbook" name="playbookOverview" component={PlaybookOverview}></Route>
      <Route path="mapOverview/:map" name="mapOverview" component={MapOverview}></Route>
      <Route path="playOverview/:play" name="playOverview" component={PlayOverview}></Route>
    </Route>
  </Router>, app);
