import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Entry from '../pages/Entry';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Lot from '../pages/Lot';
import NotFound from '../pages/NotFound';
import Search from '../pages/Search';

export default function Content(props) {
  return(
    <Switch>
      <Route path='/' exact render={() => <Landing isLoggedIn={props.isLoggedIn} />} />
      <Route path='/home' exact render={() => <Home isLoggedIn={props.isLoggedIn} />} />
      <Route path='/lot/:id' exact render={() => <Lot isLoggedIn={props.isLoggedIn} />} />
      <Route path='/search' exact render={() => <Search isLoggedIn={props.isLoggedIn} />} />
      <Route path='/entry/:id' exact render={() => <Entry isLoggedIn={props.isLoggedIn} />} />
      <Route path='*' component={ NotFound } />
    </Switch>
  );
}
