import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { DataContext } from 'App';

import icon from 'assets/icon-location.svg';

const accessToken = process.env.REACT_APP_LMAPS_API_KEY;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Map = ReactMapboxGl({
  accessToken,
  zoom: 15,
});

export default function MapBox() {
  const {
    data: { lng, lat },
  } = useContext(DataContext);

  return (
    <Container>
      <Map
        style='mapbox://styles/mapbox/streets-v11' // eslint-disable-line
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
        zoom={[14]}
        center={[lng, lat]}
      >
        <Layer
          type='symbol'
          id='marker'
          llayout={{ 'icon-image': 'marker-15' }}
        >
          <Feature coordinates={[lat, lng]} />
        </Layer>

        <Marker coordinates={[lng, lat]} anchor='bottom'>
          <img src={icon} alt='map' />
        </Marker>
      </Map>
    </Container>
  );
}

Map.propTypes = {};
