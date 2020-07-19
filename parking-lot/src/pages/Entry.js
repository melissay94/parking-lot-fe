import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import ConfirmDeleteModel from '../components/ConfirmDeleteModal';
import PostModal from '../components/PostModal';

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

export default function Entry({ isLoggedIn }) {

  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const toggleDelete = () => setDeleteIsOpen(!deleteIsOpen);

  const [editIsOpen, setEditIsOpen] = useState(false);
  const toggleEdit = () => setEditIsOpen(!editIsOpen);

  if (!isLoggedIn) {
    return <Redirect to="/" />
  }

  return(
    <div className="content">
      <div className="header">
        <h1>{testEntry.name}</h1>
        <h6>Posted on {testEntry.datePosted} by {testEntry.author}</h6>
        <div className="controls">
          <Button onClick={toggleEdit}>Edit Post</Button>
          <PostModal isOpen={editIsOpen} toggle={toggleEdit} post={testEntry} isNew={false} />
          <Button onClick={toggleDelete}>Delete Post</Button>
          <ConfirmDeleteModel isOpen={deleteIsOpen} toggle={toggleDelete} modalQuestion="Delete Your Post?" />
        </div>
      </div>
      <p className="body-text">{testEntry.description}</p>
      <CommentList list={testEntry.comments} />
      <CommentForm />
    </div>
  );
}
