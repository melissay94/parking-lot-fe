import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import LotCard from './LotCard';

export default function LotList() {
  const lotCards = [{
    title: "Hello World",
    description: "Test card to see if layout is working"
  }, {
    title: "Hello World",
    description: "Test card to see if layout is working"
  },{
    title: "Hello World",
    description: "Test card to see if layout is working"
  }];

  return(
    <Container>
      <Row>
        {lotCards.map(card => {
          return (
            <Col md={4} sm={6} xs={12}>
              <LotCard card={card}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
