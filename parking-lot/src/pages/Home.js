import React from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';

import HomeHeader from '../components/headers/HomeHeader';
import LotList from '../components/LotList';
import useRedirect from '../hooks/useRedirect';
import useQueryUserLots from '../hooks/useQueryUserLots';

export default function Home({ isLoggedIn }) {
  
  useRedirect(isLoggedIn, useHistory());

  const { data, loading, error } = useQueryUserLots();

  let list;

  if (data) {
    if (data.currentUser.lots.length > 0) {
      list = <LotList list={data.currentUser.lots} />
    } else {
      list = <h4 className="body-text">You are not currently in any lots.</h4>
    }
  }

  if (loading) {
    list = <Spinner type="growing" color="light" />
  }

  if (error) {
    list = <h4 className="body-text error">Could not get lots</h4>
  }

  return(
    <div className="content">
      <HomeHeader />
      {list}
    </div>
  );
}
