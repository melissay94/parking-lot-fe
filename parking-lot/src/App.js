import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './components/Content';
import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Footer from './components/Footer';

const GET_IS_LOGGEDIN = gql`{
  isLoggedIn @client
}`;

function App() {
  const { data } = useQuery(GET_IS_LOGGEDIN);

  const nav = true ? <NavBar user={null} /> : null;
  
  return (
    <Router>
      <div className='App'>
        {nav}
        <Content isLoggedIn={ data.isLoggedIn } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
