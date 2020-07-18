import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';
import "../styles/ListItem.css"

export default function EntryCard({ card }) {
  
  return (
    <Card body className="list-item">
      <CardTitle>{card ? card.name : "Name"}</CardTitle>
      <CardText>{card ? card.description : ""}</CardText>
      <CardText>{card ? card.comments : 0}</CardText>
      <Button>Go to Entry</Button>
    </Card>
  );
}
