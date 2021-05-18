import React, { Component, useState } from 'react';
import axios from 'axios';

import Main from 'layouts/Main';
import Loading from 'components/Loading';

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
    timezone: '',
    isp: '',
  });

  const [viewport, setViewport] = useState({
    latitude: 52.231667,
    longitude: 21.006389,
    zoom: 14,
    width: '100%',
    height: '100%',
  });

  function handleInput(e) {
    return setInput(e.target.value);
  }

  async function handleSearch(e) {
    e.preventDefault();

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
        timezone,
        isp,
      });

      setViewport({
        ...viewport,
        latitude: lat,
        longitude: lng,
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
      <DataContext.Provider value={{ data, loading, viewport }}>
        <Main />
        {loading ? <Loading /> : null}
      </DataContext.Provider>
    </InputContext.Provider>
  );
}
