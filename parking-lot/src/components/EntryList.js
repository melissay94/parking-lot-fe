import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import EntryCard from './EntryCard';

export default function EntryList({ entryCards }) {

  return(
    <Container>
      <Row>
        {entryCards.map(card => {
          return (
            <Col md={4} sm={6} xs={12}>
              <EntryCard card={card}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
