import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './components/Content';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';

const GET_IS_LOGGEDIN = gql`{
  isLoggedIn @client
}`;

function App() {
  const { data } = useQuery(GET_IS_LOGGEDIN);
  
  return (
    <Router>
      <div className='App'>
        <Content isLoggedIn={ data.isLoggedIn } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
