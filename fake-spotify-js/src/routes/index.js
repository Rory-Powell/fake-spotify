import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';

import * as paths from './paths';
import PageNotFound from "pages/not-found";
import { root } from "routes/paths";
import PageLibrary from "pages/library";
import PageHome from "pages/home";
import PageAlbum from "pages/album";
import PagePlaylist from "pages/playlist";
import { withRouter } from "react-router";

const Routes = () => (
  <Switch>
    <Redirect
      exact from={root}
      to={paths.library}
    />
    <Route
      exact
      path={paths.library}
      component={PageLibrary}
    />
    <Route
      exact
      path={paths.home}
      component={PageHome}
    />
    <Route
      exact
      path={paths.album(':id')}
      component={PageAlbum}
    />
    <Route
      exact
      path={paths.playlist(':id')}
      component={withRouter(PagePlaylist)}
    />
    <Route
      exact
      component={PageNotFound} />
  </Switch>
);

export default Routes;
