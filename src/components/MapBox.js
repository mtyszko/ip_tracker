import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { DataContext } from 'App';

import icon from 'assets/icon-location.svg';
import { prettyFormat } from '@testing-library/react';

const accessToken = process.env.REACT_APP_LMAPS_API_KEY;

export default function MapBox() {
  const { viewport, setViewport } = useContext(DataContext);

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/mapbox/streets-v11'
      mapboxApiAccessToken={accessToken}
      {...viewport}
      onViewportChange={setViewport}
    >
      <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
        <img src={icon} alt='marker' />
      </Marker>
    </ReactMapGL>
  );
}
