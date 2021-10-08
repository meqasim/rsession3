import React from 'react';
import './App.css';
import Dinner from './dinner.js';
import Development from './development';

function App() {
  return (
    <div className="App">
      <Development Dname='BlockChain' />
      <Development Dname='Cryptocurrency' />
      <Development Dname='DApp' />
      <Dinner />
    </div>
  );
}

export default App;
