import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
document.getElementById('root')
);
registerServiceWorker();
