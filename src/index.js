import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import JobDetail from './pages/JobDetail'
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import  BankJobMain  from './pages/bankjobs/bankjobmain';
import {Switch}  from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer'


const store = createStore(rootReducer);

/* 
ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
); */

ReactDOM.render(<Provider store = {store}>
  <Router >

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/:searchquery" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/jobdetail/:jobid" component={JobDetail}/>
      <Route exact path="/jobcounsel/" component={Home} />
      <Route exact path="/jobcounsel/home" component={Home} />
      <Route exact path="/jobcounsel/home/:searchquery" component={Home} />
      <Route exact path="/jobcounsel/about" component={About} />
      <Route exact path="/jobcounsel/jobdetail/:jobid" component={JobDetail}/>
    </Switch>

  </Router>

</Provider>, document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
