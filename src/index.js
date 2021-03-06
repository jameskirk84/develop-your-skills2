import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import RolesPage from './components/RolesPage/RolesPage';
import * as serviceWorker from './serviceWorker';
import skills from './data/skills.json';
import roles from './data/roles.json';
import levels from './data/levels.json';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/roles">
          <RolesPage skills={skills} roles={roles} levels={levels}/>
        </Route>       
        <Route path="/">
          <App skills={skills} roles={roles} levels={levels}/>
        </Route>
      </Switch>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
