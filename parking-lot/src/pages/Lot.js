import React from 'react';
import { useHistory } from 'react-router-dom';

import useRedirect from '../hooks/useRedirect';
import LotHeader from '../components/headers/LotHeader';
import EntryList from '../components/lists/EntryList';

export default function Lot({ isLoggedIn }) {

  const shouldRedirect = isLoggedIn ? false : true;
  
  useRedirect(shouldRedirect, isLoggedIn, useHistory());

  // For future: Code should only show on the page if the current user is the creator of the lot
  return(
    <div className="content">
      <LotHeader lotInfo={ exampleLot } />
      <EntryList entryCards={exampleLot.entries} />
    </div>
  );
}
