import './App.css';
import React, { Component, useState } from 'react';
import StopWatch from './components/StopWatch';

function App(props) {
  const [isVisible, setVisible] = useState(true);
  return (
    <>
      <button onClick={() => setVisible(!isVisible)}>switch</button>
      {isVisible ? <StopWatch /> : null}
    </>
  );
}

export default App;
