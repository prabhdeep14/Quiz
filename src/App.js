// src/App.js

import React from 'react';
import './App.css';
import Quiz from './Quiz';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz</h1>
      </header>
      <Quiz />
    </div>
  );
};

export default App;
