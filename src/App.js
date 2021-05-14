import React, { Component, useState } from 'react';
import axios from 'axios';

import Main from 'layouts/Main';

import './App.css';

import { ipifyBaseUrl } from 'utils/vars';

export const InputContext = React.createContext();
export const DataContext = React.createContext();

export default function App() {
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState('');

  const [data, setData] = useState({
    err: '',
    ip: '',
    locName: '',
    lat: '52.231667',
    lng: '21.006389',
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
      setData((prevState) => ({
        ...prevState,
        err: 'Input correct IPv4 or IPv6 address.',
        ip: '',
        locName: '',
        timezone: '',
        isp: '',
      }));

      setLoading(false);
    }
  }

  return (
    <InputContext.Provider value={{ handleInput, handleSearch, input }}>
      <DataContext.Provider value={{ data }}>
        <Main />
      </DataContext.Provider>
    </InputContext.Provider>
  );
}
