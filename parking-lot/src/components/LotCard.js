import React from 'react';
import { Link } from 'react-router-dom';
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
      <Button
        tag={Link}
        to={`/lot/${card ? card.id : 0}`}>Go to Lot</Button>
    </Card>
  );
}
