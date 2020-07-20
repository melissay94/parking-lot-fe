import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Button, Spinner } from 'reactstrap';
import gql from 'graphql-tag';

import LotList from '../components/LotList';
import LotModal from '../components/LotModal';

const GET_LOTS = gql`
  query {
    currentUser {
      lots {
        name
        description
      }
    }
  }
`;

export default function Home({ isLoggedIn }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { data, loading, error } = useQuery(GET_LOTS);

  if (!isLoggedIn) {
    return <Redirect to="/" />
  }

  let list;

  if (data) {
    if (data.currentUser.lots.length > 0) {
      list = <LotList list={data.currentUser.lots} />
    } else {
      list = <h4 className="body-text">You are not currently in any lots.</h4>
    }
  }

  if (loading) {
    list = <Spinner type="growing" color="light" />
  }

  if (error) {
    list = <h4 className="body-text error">Could not get lots</h4>
  }

  return(
    <div className="content">
      <div className="header">
        <h1>My Lots</h1>
        <Button onClick={toggle}>Create Lot</Button>
        <LotModal isNew={true} isOpen={isOpen} toggle={toggle} />
      </div>
      {list}
    </div>
  );
}
