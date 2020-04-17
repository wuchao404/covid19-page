import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import A from '../pages/test/a'
import B from '../pages/test/b'
import C from '../pages/test/c'
import Topics from '../pages/test/topics'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path='/a'> <A /> </Route>
        <Route path='/b'> <B /> </Route>
        <Route path='/c'> <C /> </Route>
        <Route path='/topics'> <Topics /> </Route>
      </Switch>
    </Router>
  )
}