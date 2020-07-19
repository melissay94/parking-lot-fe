import React from 'react';
import { Link } from 'react-router-dom';
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
      <CardText>{card ? card.author : ""}</CardText>
      <CardText>{card ? card.comments : 0} Comments</CardText>
      <Button tag={Link} to={`/entry/${card ? card.id : 0}`}>Go to Entry</Button>
    </Card>
  );
}
