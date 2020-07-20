import React, { useState } from 'react';
import { Button } from 'reactstrap';

import LotModal from '../modals/LotModal';

export default function HomeHeader() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <h1>My Lots</h1>
      <Button onClick={toggle}>Create Lot</Button>
      <LotModal isNew={true} isOpen={isOpen} toggle={toggle} />
    </div>
  );
}
