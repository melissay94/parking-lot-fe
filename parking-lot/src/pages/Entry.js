import React from 'react';
import CommentList from '../components/CommentList';

const testEntry = {
  name: "Test Entry",
  description: "What is the difference between var and let?? Why do we have both in JavaScript?",
  author: "Test Student",
  datePosted: "7/19/2020",
  comments: [{
    text: "It's all about the scope! let as a keyword only works for the most immediate scope it's in. Where as var's scope is a little more extended and thus we can hold onto it for longer and manipulate it. Here is an article: https://example.com",
    author: "Test Instructor",
    datePosted: "7/20/2020"
  }, {
    text: "It's all about the scope! let as a keyword only works for the most immediate scope it's in. Where as var's scope is a little more extended and thus we can hold onto it for longer and manipulate it. Here is an article: https://example.com",
    author: "Test Instructor",
    datePosted: "7/20/2020"
  }]
}

export default function Entry(props) {
  return(
    <div className="content">
      <div className="header">
        <h1>{testEntry.name}</h1>
        <h6>Posted on {testEntry.datePosted} by {testEntry.author}</h6>
      </div>
      <p className="body-text">{testEntry.description}</p>
      <CommentList list={testEntry.comments} />
    </div>
  );
}
