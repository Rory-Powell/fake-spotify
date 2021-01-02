import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';

import * as paths from './paths';
import PageNotFound from "pages/not-found";
import { root } from "routes/paths";
import PageLibrary from "pages/library";
import PageHome from "pages/home";
import PageAlbum from "pages/album";
import PagePlaylist from "pages/playlist";

const Routes = () => (
  <Switch>
    <Redirect
      exact from={root}
      to={paths.library}
    />
    <Route
      path={paths.library}
      component={PageLibrary}
    />
    <Route
      path={paths.home}
      component={PageHome}
    />
    <Route
      path={paths.album(':id')}
      component={PageAlbum}
    />
    <Route
      path={paths.playlist(':id')}
      component={PagePlaylist}
    />
    <Route
      component={PageNotFound} />
  </Switch>
);

export default Routes;
