import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import Home from '../pages/test'
import A from '../pages/test/a'
import B from '../pages/test/b'
import C from '../pages/test/c'
import Topics from '../pages/test/topics'

export default () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/a">A</Link>
          </li>
          <li>
            <Link to="/b">About</Link>
          </li>
          <li>
            <Link to="/c">Users</Link>
          </li>
          <li>
            <Link to="/topics">topics</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/a">
          {" "}
          <A />{" "}
        </Route>
        <Route path="/b">
          {" "}
          <B />{" "}
        </Route>
        <Route path="/c">
          {" "}
          <C />{" "}
        </Route>
        <Route path="/topics">
          {" "}
          <Topics />{" "}
        </Route>
      </Switch>
    </Router>
  );
}