import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ResultCard from './ResultCard';

export default function ResultsList({ results }) {

  return(
    <Container>
      <Row>
        {results.map(result => {
          return (
            <Col md={4} sm={6} xs={12} key={result.name}>
              <ResultCard result={result}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
