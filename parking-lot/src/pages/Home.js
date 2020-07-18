import React from 'react';
import { Button } from 'reactstrap';

import LotList from '../components/LotList';
import "../styles/Home.css";

export default function Home(props) {
  return(
    <div className="content home">
      <h1>My Lots</h1>
      <Button>Create Lot</Button>
      <LotList />
    </div>
  );
}
