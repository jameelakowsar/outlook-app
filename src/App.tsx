import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import {  Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Route path="/" component={HomePage} />
    </div>
  );
}

export default App;
