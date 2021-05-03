import React, { Component } from 'react';

import Main from 'layouts/Main';

import './App.css';

const GlobalContext = React.createContext();
class App extends React.Component {
  state = {
    input: '',
    ip: '',
    locName: '',
    lat: '',
    lng: '',
    tzone: '',
    isp: '',
  };

  handleInput = (e) => {
    this.setState = {
      input: e.target.value,
    };
  };

  handleSearch = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <GlobalContext.Provider value={(this.handleInput, this.handleSearch)}>
        <Main />
      </GlobalContext.Provider>
    );
  }
}
export default App;
