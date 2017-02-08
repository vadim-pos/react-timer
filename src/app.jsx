import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// Components 
import { Main } from './components/main.jsx';

// Vendors
import 'jquery/dist/jquery.min.js';
import 'foundation-sites/dist/js/foundation.min.js';
// Load Foundation
import 'foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

// Styles
import './scss/main.scss';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}></Route>
    </Router>
    , document.getElementById('app-container')
);