import React, { Component, useState } from 'react';
import axios from 'axios';

import Main from 'layouts/Main';

import './App.css';

import { ipifyBaseUrl } from 'utils/vars';

export const GlobalContext = React.createContext();

export default function App() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [data, setData] = useState({
    err: '',
    ip: '',
    locName: '',
    lat: '',
    lng: '',
    timezone: '',
    isp: '',
  });

  function handleInput(e) {
    return setInput(e.target.value);
  }

  async function handleSearch(e) {
    e.preventDefault();
    console.log(input);
    setLoading(true);

    try {
      const res = await axios.get(`${ipifyBaseUrl}${input}`);

      const {
        data: {
          ip,
          location: { city, lat, lng, region, timezone },
          isp,
        },
      } = res;

      setData({
        err: '',
        ip,
        locName: `${city}, ${region}`,
        lat,
        lng,
        timezone,
        isp,
      });
      setLoading(false);
    } catch (err) {
      setData({ err: 'Input correct IPv4 or IPv6 address.' });
      setLoading(false);
    }
  }

  return (
    <GlobalContext.Provider value={{ handleInput, handleSearch, input }}>
      <Main />
    </GlobalContext.Provider>
  );
}
