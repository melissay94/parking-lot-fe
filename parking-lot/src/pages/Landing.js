import React from 'react';
import { useHistory } from 'react-router-dom';

import useRedirect from '../hooks/useRedirect';
import LandingHeader from '../components/headers/LandingHeader';
import AccountForms from '../components/AccountFormTabs';
import "../styles/Landing.css";

export default function Landing({ isLoggedIn }) {

  const shouldRedirect = !isLoggedIn ? false : true;
  
  useRedirect(shouldRedirect, isLoggedIn, useHistory());
  
  return(
    <div id='landing' className="content">
      <LandingHeader />
      <AccountForms className="landing-forms" />
    </div>
  );
}
