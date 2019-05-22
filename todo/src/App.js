import React, { Component } from 'react';
import Header from "./Components/header";
import TaskBar from "./Components/taskbar";
import TaskList from "./Components/tasklist";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TaskBar />
        <TaskList />
      </div>
    )
  }
}

export default App;

