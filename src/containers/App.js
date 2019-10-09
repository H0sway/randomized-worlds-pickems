import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import '../style/App.scss'

import Randomizer from './Randomizer';

import Header from '../components/Header';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />

        <Randomizer />
      </Container>
    </div>
  )
};

export default App;
