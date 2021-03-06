import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Playlist, Dashboard, Login, Homepage} from './components';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/playlist" component={Playlist} />
          <Route
            path="*"
            render={() => {
              return <h1>404, we cannot find what you are looking for!</h1>;
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
