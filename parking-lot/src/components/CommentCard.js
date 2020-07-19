import React from 'react';
import { Card, CardText, CardFooter } from 'reactstrap';
import "../styles/ListItem.css";

export default function CommentList({ comment }) {
  return (
    <Card body className="list-item">
      <CardText>{comment ? comment.text : "No comment"}</CardText>
      <CardFooter className="text-muted">{comment ? comment.author : ""}, {comment ? comment.datePosted : ""}</CardFooter>
    </Card>
  )
}
