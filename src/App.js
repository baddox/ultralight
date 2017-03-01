import React, { Component } from 'react';
import './App.css';

import CategoryList from './CategoryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ultralight</h1>
        <h2>Categories</h2>
        <CategoryList/>
      </div>
    );
  }
}

export default App;
