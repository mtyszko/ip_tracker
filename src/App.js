import React, { Component } from 'react';

import Main from 'layouts/Main';

import './App.css';

export const GlobalContext = React.createContext();
class App extends React.Component {
  state = {
    input: '',
    loading: false,
    err: '',
    ip: '',
    locName: '',
    lat: '',
    lng: '',
    tzone: '',
    isp: '',
    handleInput: (e) => {
      this.setState({
        input: e.target.value,
      });
    },
    handleSearch: (e) => {
      e.preventDefault();
    },
  };

  render() {
    const { handleInput, handleSearch, input } = this.state;

    return (
      <GlobalContext.Provider value={{ handleInput, handleSearch, input }}>
        <Main />
      </GlobalContext.Provider>
    );
  }
}
export default App;
