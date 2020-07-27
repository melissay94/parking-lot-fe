import React from 'react';
import { useHistory } from 'react-router-dom';

import useRedirect from '../hooks/useRedirect';
import ProfileHeader from '../components/headers/ProfileHeader';
import ProfileControls from '../components/ProfileControls';
import "../styles/Profile.css";

export default function Profile({ isLoggedIn }) {

  const shouldRedirect = isLoggedIn ? false : true;
  
  useRedirect(shouldRedirect, isLoggedIn, useHistory());

  return(
    <div className="content">
      <ProfileHeader user={ testUser } />
      <div className="stats">
        <h6>{testUser.lotCount} Lots</h6>
        <h6>{testUser.entryCount} Entries</h6>
        <h6>{testUser.commentCount} Comments</h6>
      </div>
      <ProfileControls />
    </div>
  );
}
