import React, { Component } from 'react';

import Main from 'layouts/Main';

import './App.css';

const GlobalContext = React.createContext();
class App extends React.Component {
  state = {};

  handleInput = () => {};

  handleSearch = () => {};

  render() {
    return (
      <GlobalContext.Provider value={(this.handleInput, this.handleSearch)}>
        <Main />
      </GlobalContext.Provider>
    );
  }
}
export default App;
