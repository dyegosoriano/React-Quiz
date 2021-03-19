import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, Page404, Questions, Score } from 'pages'

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/questions" component={Questions} />
      <Route path="/score" component={Score} />
      <Route path="*" component={Page404} />
    </Switch>
  </BrowserRouter>
)

export default Routes
