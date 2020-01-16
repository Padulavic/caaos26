import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css'
import App from './App';
import createChar from "./views/createChar";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/createChar" component={createChar}/>
      </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
