import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Entry from '../pages/Entry';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Lot from '../pages/Lot';
import NotFound from '../pages/NotFound';
import Search from '../pages/Search';
import Profile from '../pages/Profile';

export default function Content({ isLoggedIn }) {
  return(
    <Switch>
      <Route path='/' exact render={() => <Landing isLoggedIn={ isLoggedIn } />} />
      <Route path='/home' exact render={() => <Home isLoggedIn={ isLoggedIn } />} />
      <Route path='/lot/:id' exact render={() => <Lot isLoggedIn={ isLoggedIn } />} />
      <Route path='/search' exact render={() => <Search isLoggedIn={ isLoggedIn } />} />
      <Route path='/entry/:id' exact render={() => <Entry isLoggedIn={ isLoggedIn } />} />
      <Route path='/profile' exact render={() => <Profile isLoggedIn={ isLoggedIn } />} />
      <Route path='*' component={ NotFound } />
    </Switch>
  );
}
