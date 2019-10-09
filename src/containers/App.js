import React, { Component } from 'react';

import Randomizer from './Randomizer';

import Header from '../components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Randomizer />
    </div>
  )
};

export default App;
