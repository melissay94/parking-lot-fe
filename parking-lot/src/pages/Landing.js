import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import AccountForms from '../components/AccountForms';

export default function Landing(props) {

  return(
    <div id='landing'>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className='display-3'>Parking Lot</h1>
          <p className='lead'>A collaborative question answering experience for classes everywhere.</p>
        </Container>
      </Jumbotron>
      <AccountForms />
    </div>
  );
}
