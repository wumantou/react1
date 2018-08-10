import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import NotFound from './NotFound/index'

// import Home from './Home/index';
// import Cat from './Home/Cat/index';
// import CatDetail from './Home/Cat/detail';
// import Dog from './Home/Dog/index';

import Login from './auth/index'
import Frame from './Layout/Frame'
import LikeButton from './LikeButton/index'
import Page from './Page/index'
import AsyncComponent from '../components/AsyncComponent'

const Movie = AsyncComponent(() => import('./Movie'/* webpackChunkName: 'movie' */))
export default () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/page" />

      {/* not found */}
      <Route path="/404" component={ NotFound } />

      {/* like button */}
      <Route path="/button" component={ LikeButton } />
      {/* like button */}
      <Route path="/page" component={ Page } />

      {/* auth */}
      <Route path="/login" component={ Login } />

      {/* layout frame */}
      <Route path="/movie" component={ Movie } />
      <Route path="/book" component={ Frame } />

      <Redirect from="*" to='/404' />
    </Switch>
  )
}