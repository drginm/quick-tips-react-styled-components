import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const Title = styled.h1`
  color: palevioletred;
  border-left: 5px palevioletred solid;
  padding-left: 5px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Title>
          This is the styled Title
        </Title>
      </header>
    </div>
  );
}

export default App;
