import React, { useState } from 'react';
import { Button } from 'reactstrap';

import ConfirmDeleteModal from '../modals/ConfirmDeleteModal';
import LotModal from '../modals/LotModal';
import PostModal from '../modals/PostModal';

export default function LotHeader({ lotInfo }) {

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

  let code = showCode ? lotInfo.code : "********";

  return (
    <div className="header">
      <h1>{lotInfo.title}</h1>
      <h4>{lotInfo.description}</h4>
      <h6>{lotInfo.author}</h6>
      <div className="lot-code">
        <h6>Lot Code: {code}</h6>
        <Button onClick={revealCode}>Show Code</Button>
      </div>
      <div className="controls">
        <Button onClick={toggleAdd}>Add Entry</Button>
        <PostModal isOpen={addIsOpen} toggle={toggleAdd} isNew={true} />
        <Button onClick={toggleEdit}>Edit Lot</Button>
        <LotModal toggle={toggleEdit} isOpen={editIsOpen} isNew={false} lot={lotInfo} />
        <Button onClick={toggleDelete}>Delete Lot</Button>
        <ConfirmDeleteModal isOpen={deleteIsOpen} toggle={toggleDelete} modalQuestion="Delete this Lot?" />
      </div>
    </div>
  );
}
