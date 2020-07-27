import React, { useState } from 'react';
import { Button } from 'reactstrap';

import ConfirmDeleteModel from '../modals/ConfirmDeleteModal';
import PostModal from '../modals/PostModal';

export default function EntryHeader({ entry }) {

  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  
  const toggleEdit = () => setEditIsOpen(!editIsOpen);
  const toggleDelete = () => setDeleteIsOpen(!deleteIsOpen);

  return(
    <div className="header">
      <h1>{entry.name}</h1>
      <h6>Posted on {entry.datePosted} by {entry.author}</h6>
      <div className="controls">
        <Button onClick={toggleEdit}>Edit Post</Button>
        <PostModal isOpen={editIsOpen} toggle={toggleEdit} post={testEntry} isNew={false} />
        <Button onClick={toggleDelete}>Delete Post</Button>
        <ConfirmDeleteModel isOpen={deleteIsOpen} toggle={toggleDelete} modalQuestion="Delete Your Post?" />
      </div>
    </div>
  );
}
