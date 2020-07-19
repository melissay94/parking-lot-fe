import React from 'react';

import EntryList from '../components/EntryList';

export default function Lot() {

  const exampleLot = {
    title: "Hello World",
    description: "Test Lot to see if layout is working",
    author: "Developer",
    members: 3,
    code: "AVC123ab",
    entries: [{
      name: "Example 1",
      author: "Student",
      comments: 3
    }, {
      name: "Example 2",
      author: "Student",
      comments: 0
    }]
  }

  // For future: Code should only show on the page if the current user is the creator of the lot
  return(
    <div className="content">
      <div className="header">
        <h1>{exampleLot.title}</h1>
        <h4>{exampleLot.description}</h4>
        <h6>{exampleLot.author}</h6>
      </div>
      <EntryList entryCards={exampleLot.entries} />
    </div>
  );
}
