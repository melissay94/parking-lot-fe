import React from 'react';
import { Button } from 'reactstrap';

import NavBar from '../components/NavBar';
import LotList from '../components/LotList';

export default function Home(props) {
  return(
    <div>
      <NavBar user={null} />
      <h1>My Lots</h1>
      <Button>Create Lot</Button>
      <LotList />
    </div>
  );
}