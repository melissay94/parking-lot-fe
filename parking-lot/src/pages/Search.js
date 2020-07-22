import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import useRedirect from '../hooks/useRedirect';
import ResultList from '../components/lists/ResultsList';

const testResults = [{
  name: "sei-629"
}, {
  name: "test-class"
}, {
  name: "University Physics 101"
}];
 
export default function Search({ isLoggedIn }) {

  const shouldRedirect = isLoggedIn ? false : true;
  
  useRedirect(shouldRedirect, isLoggedIn, useHistory());

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery().get("query");

  return(
    <div className="content">
      <div className="header">
        <h1>Search Results for: {query}</h1>
        <h6>Found {6} Matching Results</h6>
      </div>
      <ResultList results={testResults}/>
    </div>
  );
}
