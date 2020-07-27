import React from 'react';
import { useHistory } from 'react-router-dom';

import useRedirect from '../hooks/useRedirect';
import EntryHeader from '../components/headers/EntryHeader';
import CommentList from '../components/lists/CommentList';
import CommentForm from '../components/forms/CommentForm';

export default function Entry({ isLoggedIn }) {

  const shouldRedirect = isLoggedIn ? false : true;
  
  useRedirect(shouldRedirect, isLoggedIn, useHistory());

  return(
    <div className="content">
      <EntryHeader entry={testEntry} />
      <p className="body-text">{testEntry.description}</p>
      <CommentList list={testEntry.comments} />
      <CommentForm />
    </div>
  );
}
