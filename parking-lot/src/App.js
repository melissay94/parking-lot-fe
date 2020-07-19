import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import NavBar from './components/NavBar';
import Content from './components/Content';
import Footer from './components/Footer';

import './styles/App.css';
import "./styles/Page.css";

const GET_IS_LOGGEDIN = gql`{
  isLoggedIn @client
}`;

function App() {

  const { data } = useQuery(GET_IS_LOGGEDIN);

  const nav = data.isLoggedIn ? <NavBar user={null} /> : null;
  
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
