import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

export default function EntryCard({ card }) {
  
  return (
    <Card body>
      <CardTitle>{card ? card.name : "Name"}</CardTitle>
      <CardText>{card ? card.description : ""}</CardText>
      <CardText>{card ? card.comments : 0}</CardText>
      <Button>Go to Entry</Button>
    </Card>
  );
}
