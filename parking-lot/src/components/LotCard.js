import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

export default function LotCard({ card }) {
  
  return (
    <Card body>
      <CardTitle>{card ? card.title : "Title"}</CardTitle>
      <CardText>{card ? card.description : ""}</CardText>
      <Button>Go to Lot</Button>
    </Card>
  );
}
