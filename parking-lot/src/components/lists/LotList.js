import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import LotCard from '../items/LotCard';

export default function LotList({ list }) {

  return(
    <Container>
      <Row>
        {list.map(card => {
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
