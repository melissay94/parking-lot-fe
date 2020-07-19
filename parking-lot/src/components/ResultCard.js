import React, { useState } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

import JoinLotModal from './JoinLotModal';
import "../styles/ListItem.css"

export default function ResultCard({ result }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <Card body className="list-item">
      <CardTitle>{result ? result.name : "Name"}</CardTitle>
      <CardText>5 members</CardText>
      <CardText>Not a member</CardText>
      <Button onClick={toggle}>Join Entry</Button>
      <JoinLotModal isOpen={isOpen} toggle={toggle} />
    </Card>
  );
}
