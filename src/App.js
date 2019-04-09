import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PostContainers from "./containers/PostContainers";

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <PostContainers />
        </div>

    );
  }
}

export default App;
