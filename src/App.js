import React, { Component } from 'react';
import axios from 'axios';

import Main from 'layouts/Main';

import './App.css';

import { ipifyBaseUrl } from 'utils/vars';

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
    timezone: '',
    isp: '',

    handleInput: (e) => {
      this.setState({
        input: e.target.value,
      });
    },

    handleSearch: async (e) => {
      this.setState({ loading: true });
      e.preventDefault();
      console.log(this.state.input);
      try {
        const res = await axios.get(`${ipifyBaseUrl}${this.state.input}`);

        const {
          data: {
            ip,
            location: { city, lat, lng, region, timezone },
            isp,
          },
        } = res;

        this.setState({
          loading: false,
          err: '',
          ip,
          locName: `${city}, ${region}`,
          lat,
          lng,
          timezone,
          isp,
        });
      } catch (err) {
        this.setState({
          loading: false,
          err: 'Input correct IPv4 or IPv6 address.',
        });
      }
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
