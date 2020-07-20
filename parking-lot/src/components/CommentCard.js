import React, { useState } from 'react';
import { Card, CardText, CardFooter, Button } from 'reactstrap';

import EditCommentModal from './modals/EditCommentModal';
import ConfirmDeleteModal from './modals/ConfirmDeleteModal';
import "../styles/ListItem.css";

export default function CommentList({ comment }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const toggleDelete = () => setDeleteIsOpen(!deleteIsOpen);

  return (
    <Card body className="list-item">
      <CardText>{comment ? comment.text : "No comment"}</CardText>
      <CardFooter className="text-muted">
        <Button onClick={toggle}>Edit</Button>
        <EditCommentModal isOpen={isOpen} toggle={toggle} comment={comment.text} />
        <Button onClick={toggleDelete}>Delete</Button>
        <ConfirmDeleteModal isOpen={deleteIsOpen} toggle={toggleDelete} modalQuestion="Delete Your Comment?" />
        <h6>{comment ? comment.author : ""}, {comment ? comment.datePosted : ""}</h6>
      </CardFooter>
    </Card>
  );
}
