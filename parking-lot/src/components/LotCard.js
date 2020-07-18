import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';
import "../styles/ListItem.css";

export default function LotCard({ card }) {
  
  return (
    <Card body className="list-item">
      <CardTitle>{card ? card.title : "Title"}</CardTitle>
      <CardText>{card ? card.description : ""}</CardText>
      <Button>Go to Lot</Button>
    </Card>
  );
}
