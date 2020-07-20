import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

import useRedirect from '../hooks/useRedirect';
import EntryList from '../components/EntryList';
import ConfirmDeleteModal from '../components/modals/ConfirmDeleteModal';
import LotModal from '../components/modals/LotModal';
import PostModal from '../components/modals/PostModal';

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

export default function Lot({ isLoggedIn }) {

  useRedirect(isLoggedIn, useHistory());

  const [showCode, setShowCode] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [addIsOpen, setAddIsOpen] = useState(false);

  const revealCode = () => {

    setShowCode(!showCode);

    setTimeout(() => {
      setShowCode(false);
    }, 60000);
    
  }

  const toggleDelete = () => setDeleteIsOpen(!deleteIsOpen);
  const toggleEdit = () => setEditIsOpen(!editIsOpen);
  const toggleAdd = () => setAddIsOpen(!addIsOpen);

  let code = showCode ? exampleLot.code : "********";

  // For future: Code should only show on the page if the current user is the creator of the lot
  return(
    <div className="content">
      <div className="header">
        <h1>{exampleLot.title}</h1>
        <h4>{exampleLot.description}</h4>
        <h6>{exampleLot.author}</h6>
        <div className="lot-code">
          <h6>Lot Code: {code}</h6>
          <Button onClick={revealCode}>Show Code</Button>
        </div>
        <div className="controls">
          <Button onClick={toggleAdd}>Add Entry</Button>
          <PostModal isOpen={addIsOpen} toggle={toggleAdd} isNew={true} />
          <Button onClick={toggleEdit}>Edit Lot</Button>
          <LotModal toggle={toggleEdit} isOpen={editIsOpen} isNew={false} lot={exampleLot} />
          <Button onClick={toggleDelete}>Delete Lot</Button>
          <ConfirmDeleteModal isOpen={deleteIsOpen} toggle={toggleDelete} modalQuestion="Delete this Lot?" />
        </div>
      </div>
      <EntryList entryCards={exampleLot.entries} />
    </div>
  );
}
