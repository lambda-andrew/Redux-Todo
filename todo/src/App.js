import React from 'react';

import TodoHome from './components/TodoHome'

import './App.scss';


function App() {
  return (
    <div className="App">
    <TodoHome someProp='this is a random prop'/>
    </div>
  );
}

export default App;
