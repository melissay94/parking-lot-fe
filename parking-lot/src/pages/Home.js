import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';

import LotList from '../components/LotList';
import LotModal from '../components/LotModal';

export default function Home({ isLoggedIn }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (!isLoggedIn) {
    return <Redirect to="/" />
  }

  return(
    <div className="content">
      <div className="header">
        <h1>My Lots</h1>
        <Button onClick={toggle}>Create Lot</Button>
        <LotModal isNew={true} isOpen={isOpen} toggle={toggle} />
      </div>
      <LotList />
    </div>
  );
}
